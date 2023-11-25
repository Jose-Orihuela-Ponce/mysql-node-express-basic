import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
  const [data] = await pool.query('SELECT * FROM employee');
  res.json(data);
};
export const getEmployee = async (req, res) => {
  const { id } = req.params;
  const [data] = await pool.query('SELECT * FROM employee WHERE id=?', [id]);
  if (data.length !== 0) {
    res.json(data);
  } else {
    res.status(404).send('Employee Not Found');
  }
};

export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;
  const [response] = await pool.query(
    'INSERT INTO employee (name,salary) values (?, ?)',
    [name, salary]
  );
  res.json({
    id: response.insertId,
    name,
    salary
  });
};

export const updateEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  const [data] = await pool.query('SELECT * FROM employee WHERE id=?', [id]);
  if (data.length !== 0) {
    await pool.query(
      'UPDATE employee SET name=IFNULL(?,name),salary=IFNULL(?,salary) WHERE id=?',
      [name, salary, id]
    );
    const [dataUpdate] = await pool.query('SELECT * FROM employee WHERE id=?', [
      id
    ]);
    res.json(dataUpdate);
  } else {
    res.status(404).send('Employee Not Found');
  }
};
export const deleteEmployees = async (req, res) => {
  const { id } = req.params;
  const [data] = await pool.query('SELECT * FROM employee WHERE id=?', [id]);
  if (data.length !== 0) {
    await pool.query('DELETE FROM employee WHERE id=?', [id]);
    res.json(data);
  } else {
    res.status(404).send('Employee Not Found');
  }
};
