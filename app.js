const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'your_database_name'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected');
});

// Реализация запроса для сохранения данных из формы в базу данных
app.post('/clients', (req, res) => {
  const { account_number, last_name, first_name, middle_name, date_of_birth, inn, responsible_person_full_name } = req.body;
  
  const sql = 'INSERT INTO clients (account_number, last_name, first_name, middle_name, date_of_birth, inn, responsible_person_full_name) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [account_number, last_name, first_name, middle_name, date_of_birth, inn, responsible_person_full_name], (err, result) => {
    if (err) {
      res.status(500).send('Ошибка при сохранении данных');
      throw err;
    }
    res.status(200).send('Данные успешно сохранены');
  });
});

// Реализация запроса для изменения статуса клиента
app.put('/clients/:account_number/status', (req, res) => {
  const { status } = req.body;
  const account_number = req.params.account_number;
  
  const sql = 'UPDATE clients SET status = ? WHERE account_number = ?';
  db.query(sql, [status, account_number], (err, result) => {
    if (err) {
      res.status(500).send('Ошибка при изменении статуса');
      throw err;
    }
    res.status(200).send('Статус успешно изменен');
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
