const pg = require('pg');
const url = require('url');

let config = {};

if (process.env.DATABASE_URL) {
    config = {
      connectionString: process.env.DATABASE_URL,
    };
  } else {
    config = {
      host: 'localhost',
      port: 5432,
      database: 'to-do-list-angular', 
      idleTimeoutMillis: 30000, 
    };
  }
  
  const pool = new pg.Pool(config);
  
  pool.on('connect', () => {
    console.log('Postgesql connected');
  });
  
  pool.on('error', (err) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
  });
  
  module.exports = pool;