const config = {
  name: 'allosaurus',
  // set via ssm or env
  server: {
    port: '3000',
    env: 'dev',
    context: 'local',
  }
};

module.exports = { config }