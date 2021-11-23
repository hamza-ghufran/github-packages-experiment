const config = {
  name: 'capricon',
  // set via ssm or env
  server: {
    port: '3002',
    env: 'dev',
    context: 'local',
  }
};

module.exports = { config }