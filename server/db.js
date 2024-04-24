const Pool = require('pg').Pool;

const pool = new Pool({
  user: "williamlee",
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
  password: "development",
})

module.exports = pool;