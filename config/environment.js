var config = {
  metrics: {
    port: process.env.PORT + 1 || 4001
  },

  db: {
    mongo: {
      db: 'scotch'
    }
  }

};

module.exports = config;


