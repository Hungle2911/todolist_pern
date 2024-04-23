const Pool = require('pg').Pool;
const PORT = require('index')

const pool = new Pool({
  user: "thuvo",
  host: 'localhost',
  port: PORT,
  database: 'perntodo'
})

module.exports = {pool}