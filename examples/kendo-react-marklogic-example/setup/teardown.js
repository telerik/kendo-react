const config = require(process.argv[2] || './config'),
      client = require('./client.js');

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const teardown = async (config) => {
  console.log(
    '                           TEARDOWN STARTED                           '.gray.bold.inverse
  );
  await client.deleteREST(config.rest["rest-api"].name, config);
  await sleep(config.pause || 10000);
  await Promise.all([
    client.deleteDatabase(config.databases.content.name, config),
    client.deleteDatabase(config.databases.modules.name, config),
    client.deleteUser(config.user["user-name"], config),
  ]);
  console.log(
    '                           TEARDOWN FINISHED                          '.gray.bold.inverse
  );
}

teardown(config);
