const openDb = require('../db.js');

async function CreateTableUser() {
  openDb().then((db) => {
    db.exec(
      'CREATE TABLE IF NOT EXISTS usuarios( id integer PRIMARY KEY, senha varchar(90),nomeUsuario varchar(90), token varchar(50));'
    );
  });
}

async function Token(username, password) {
  return openDb().then((db) => {
    return db
      .all(
        `SELECT token,id FROM usuarios WHERE nomeUsuario = ?  AND senha
         = ?`,
        [username, password]
      )
      .then((res) => res);
  });
}

async function AllUsers() {
  return openDb().then((db) => {
    return db.all('SELECT * FROM usuarios');
  });
}

async function NewUser(senha, nomeUsuario, token) {
  openDb().then((db) => {
    db.run('INSERT INTO usuarios (senha, nomeUsuario, token) VALUES (?,?,?)', [
      senha,
      nomeUsuario,
      token,
    ]);
  });
}

module.exports = {
  CreateTableUser,
  NewUser,
  AllUsers,
  Token,
};
