const { 
  DATABASE_HOST, 
  DATABASE_USER, 
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_PORT
} = require( '../../config' );

const { Pool } = require('pg');
//const { pg } = require("pg")
const pool = new Pool({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  port: DATABASE_PORT,
});

const getUsers = async (req, res) => {
  const response = await pool.query('SELECT * FROM users');
  res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
  //res.send('User ID: ' + req.params.id);
  const id = req.params.id;
  const response = await pool.query('SELECT *FROM users WHERE id = $1', [id]);
  res.json(response.rows);
}

const createUser = async (req, res) => {
  const {name, email} = req.body;
  const response = await pool.query('INSERT INTO users(name, email) VALUES ($1, $2)', [name, email]);
  console.log(response);
  res.json({
    message: 'User Added Successfuly',
    body:{
      user:{name, email}
    }
  });
}

const updateUser = async (req, res) => {
  const id = req.params.id;
  const {name, email} = req.body;
  const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
  console.log(response);
  res.json('User updated successfuly');
}

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
  console.log(response);
  res.json(`User ${id} deleted successfuly`);
}

module.exports = { 
  getUsers, 
  createUser,
  getUserById,
  deleteUser,
  updateUser
};
