const config = require(process.argv[2] || './config'),
      client = require('./client.js');  

const setup = async (config) => {
  console.log(
    '                            SETUP STARTED                             '.gray.bold.inverse
  );
  try {
    await client.getConfig(config);
  } catch(error) {
    console.error("Cannot connect to MarkLogic, ending setup.".red);
    process.exit();
  }
  await Promise.all([
    client.createDatabase(config.databases.content.name, config),
    client.createDatabase(config.databases.modules.name, config)
  ]);
  await Promise.all([
    client.createForest(config.databases.content.name, config),
    client.createForest(config.databases.modules.name, config),
  ]);   
  await client.createREST(config);
  await client.setRESTAuth(config);
  await client.createUser(config);
  console.log('Loading data...'.green);
  await Promise.all([
    client.loadContent(config),
    client.loadSearchOptions(config)
  ]);
  console.log(
      '                            SETUP FINISHED                            '.gray.bold.inverse
  );
}

setup(config);
