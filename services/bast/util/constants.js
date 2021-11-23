const config = {
  name: 'bast',
  // set via ssm or env
  server: {
    port: '3001',
    env: 'dev',
    context: 'local',
  }
};

module.exports = { config }