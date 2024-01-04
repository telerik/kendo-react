const rp = require('request-promise'),
      fs = require('fs'),
      colors = require('colors'),
      pressAnyKey = require('press-any-key');

const handleError = (err) => {
  if (err.error &&
      err.error.errorResponse &&
      err.error.errorResponse.message) {
    console.log('Error: '.red + err.error.errorResponse.message.red);
  } else {
    console.log(JSON.stringify(err, null, 2));
  }
  throw(err);
}

const getConfig = async (config) => {
  const options = {
    method: 'GET',
    uri: 'http://' + config.host + ':8002/manage/v2',
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    return response;
  } catch (error) {
    if (error.statusCode === 401) {
      console.error(
        "401 unauthorized, check auth configuration: ".red, 
        "username: ".concat(config.auth.user), 
        "password: ".concat(config.auth.pass));
        throw(error);
    } else if (error.error.code === 'ECONNREFUSED') {
        console.error("Connection refused, check if MarkLogic is running. ".red);
        throw(error);
    } else {
      handleError(error);
    }
  }
}

const createDatabase = async (name, config) => {
  const options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/manage/v2/databases',
    body: {
      "database-name": name
    },
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('Database created: '.green + name);
  } catch (error) {
    handleError(error);
  }
}

const getHost = async (config) => {
  const options = {
    method: 'GET',
    uri: 'http://' + config.host + ':8002/manage/v2/hosts',
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    return response['host-default-list']['list-items']['list-item'][0].nameref;
  } catch (error) {
    handleError(error);
  }
}

const createForest = async (name, config) => {
  let hostName = await getHost(config);
  const options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/manage/v2/forests',
    body: {
      "forest-name": name + '-1',
      "database": name,
      "host": hostName
    },
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('Forest created and attached: '.green + name + '-1');
  } catch (error) {
    handleError(error);
  }
}

const createREST = async (config) => {
  const options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/v1/rest-apis',
    body: config.rest,
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('REST instance created at port: '.green + config.rest["rest-api"].port);
  } catch (err) {
    if (err.statusCode === 400) {
      console.error("REST instance already exists at port: ".red + config.rest["rest-api"].port);
    } else {
      handleError(err);
    }
  }
}

const setRESTAuth = async (config) => {
  const body = config.rest.security;
  const groupName = 'Default';
  const options = {
    method: 'PUT',
    uri: 'http://' + config.host + ':8002/manage/v2/servers/' + config.rest["rest-api"].name + '/properties?group-id=' + groupName + '&format=json',
    body: body,
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('REST authentication set: '.green + config.rest.security.authentication);
  } catch (error) {
    if (error.error.errorResponse.messageCode === 'MANAGE-NOGROUPWITHSERVER') {
      console.error("Cannot set REST auth, no REST instance in group '".concat(groupName, "' with name: ").red + config.rest["rest-api"].name);
    } else {
      handleError(error);
    }
  }
}

const createXDBC = async (config) => {
  var options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/manage/v2/servers?format=json',
    body: config.xdbc,
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('XDBC server created at port:   '.green + config.xdbc.port);
  } catch (error) {
    handleError(error);
  }
}

const createRole = async (config) => {
  var options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/manage/v2/roles?format=json',
    body: config.role,
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('Role created: '.green + config.role["role-name"]);
  } catch (error) {
    handleError(error);
  }
}

const createUser = async (config) => {
  var options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/manage/v2/users?format=json',
    body: config.user,
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('User created: '.green + config.user["user-name"]);
  } catch (err) {
    if (err.statusCode === 400) {
      console.error("User already exists: ".red + config.user["user-name"])
    } else {
      console.error(err);
    }
  }
}

const loadContent = async (config) => {
  config.content.forEach(async type => {
    let contentPath = __dirname + '/' + (type.path + '/' || '');
    contentFiles = fs.readdirSync(contentPath),
    Promise.all([contentFiles.map(file => {
      let buffer;
      buffer = fs.readFileSync(contentPath + file);
      let url = 'http://' + config.host + ':' + config.rest["rest-api"].port + '/v1/documents';
      let db = '?database=' + config.databases.content.name;
      let uri = '&uri=/' + type.collection + '/' + file;
      let coll = '&collection=' + type.collection;
      let perms = "&perm:rest-writer=read&perm:rest-writer=update";
      const options = {
        method: 'PUT',
        uri: url + db + uri + coll + perms,
        body: buffer,
        auth: config.auth
      };
      return rp(options).then(response => {
        console.log(('Content loaded: ').green + '/' + type.collection + '/' + file);
      }, err => {
        console.error(err);
      });
    })]);
  })
}

const loadModules = async (config) => {
    let modulesPath = __dirname + config.modules.path + '/';
    modulesFiles = fs.readdirSync(modulesPath),
    Promise.all([modulesFiles.map(file => {
      let buffer;
      buffer = fs.readFileSync(modulesPath + file);
      let url = 'http://' + config.host + ':' + config.rest["rest-api"].port + '/v1/documents';
      let db = '?database=' + config.databases.modules.name;
      let uri = '&uri=/' + file;
      let perms = "&perm:rest-writer=read&perm:rest-writer=execute";
      const options = {
        method: 'PUT',
        uri: url + db + uri + perms,
        body: buffer,
        auth: config.auth
      };
      return rp(options).then(response => {
        console.log(('Module loaded: ').green + '/' + file);
      }, err => {
        console.error(err);
      });
    })]);
}

const loadSearchOptions = async (config) => {
  let optionsFile = __dirname + '/data/' + config.rest.options.file;
  let buffer = fs.readFileSync(optionsFile);

  let bufferString = buffer.toString().replace("%%ENTITYTYPE%%", config.entityType);
  
  let url = 'http://' + config.host + ':' + config.rest["rest-api"].port + '/v1/config/query/' + config.rest.options.name;

  const options = {
    method: 'POST',
    uri: url,
    body: bufferString,
    auth: config.auth,
    headers: {
      'Content-Type': 'application/xml'
    },
  };
  try {
    const response = await rp(options);
    console.log('Search options loaded: '.green + '/v1/config/query/' + config.rest.options.name);
  } catch (err) {
    if (err.statusCode === 400) {
      console.error("Search options already exists: ".red + config.rest.options.name)
    } else {
      console.error(err);
    }
  }
}

const deleteForest = async (name, config) => {
  const options = {
    method: 'DELETE',
    uri: 'http://' + config.host + ':8002/manage/v2/forests/' + name + '?level=full',
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('Forest deleted: '.green + name);
  } catch (error) {
    handleError(error);
  }
}

const deleteDatabase = async (name, config) => {
  const options = {
    method: 'DELETE',
    uri: 'http://' + config.host + ':8002/manage/v2/databases/' + name + '?forest-delete=data',
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('Database deleted: '.green + name);
  } catch (error) {
    handleError(error);
  }
}

const clearDatabase = async (name, config) => {
  const operation = {"operation": "clear-database"};
  const options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/manage/v2/databases/' + name,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('Database cleared: '.green + name);
  } catch (error) {
    handleError(error);
  }
}

const deleteREST = async (name, config) => {
  const options = {
    method: 'DELETE',
    uri: 'http://' + config.host + ':8002/v1/rest-apis/' + name + '?include=content&include=modules',
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('REST instance deleted: '.green + name);
  } catch (error) {
    handleError(error);
  }
}

const deleteXDBC = async (name, config) => {
  const options = {
    method: 'DELETE',
    uri: 'http://' + config.host + ':8002/manage/v2/servers/' + name + '?group-id=Default&format=json',
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('XDBC server deleted: '.green + name);
  } catch (error) {
    handleError(error);
  }
}

const deleteUser = async (name, config) => {
  const options = {
    method: 'DELETE',
    uri: 'http://' + config.host + ':8002/manage/v2/users/' + name,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('User deleted: '.green + name);
  } catch (err) {
    if (err.statusCode === 404) {
      console.error("User does not exist: ".red + name)
    } else {
      console.error(err);
    }
  }
}

const deleteRole = async (name, config) => {
  const options = {
    method: 'DELETE',
    uri: 'http://' + config.host + ':8002/manage/v2/roles/' + name,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('Role deleted: '.green + name);
  } catch (error) {
    handleError(error);
  }
}

const deleteSearchOptions = async (name, config) => {

  let url = 'http://' + config.host + ':' + config.rest["rest-api"].port + '/v1/config/query/' + name;

  const options = {
    method: 'DELETE',
    uri: url,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('Search options deleted: '.green + name);
  } catch (error) {
    handleError(error);
  }
}

const client = {
  getConfig: getConfig,
  createDatabase: createDatabase,
  getHost: getHost,
  createForest: createForest,
  createREST: createREST,
  setRESTAuth: setRESTAuth,
  createXDBC: createXDBC,
  createRole: createRole,
  createUser: createUser,
  loadContent: loadContent,
  loadModules: loadModules,
  loadSearchOptions: loadSearchOptions,
  deleteForest: deleteForest,
  deleteDatabase: deleteDatabase,
  clearDatabase: clearDatabase,
  deleteREST: deleteREST,
  deleteXDBC: deleteXDBC,
  deleteUser: deleteUser,
  deleteRole: deleteRole,
  deleteSearchOptions: deleteSearchOptions,
};

module.exports = client;