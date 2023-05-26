/* const openDb = require('../db.js');

async function CreateTableMessage() {
  openDb().then((db) => {
    db.run(
      'CREATE TABLE IF NOT EXISTS messages(id INTEGER PRIMARY KEY, content TEXT NOT NULL, de INT NOT NULL, para INT NOT NULL, FOREIGN KEY (de) REFERENCES usuario (id), FOREIGN KEY (para) REFERENCES usuario (id))'
    );
  });
}

async function NewMessage(content, id1, id2) {
  openDb().then((db) => {
    db.run('INSERT INTO messages (content, id1,id2) VALUES(?,?,?)', [
      content,
      id1,
      id2,
    ]);
  });
}

async function SelectMessages( id1, id2) {
  return openDb().then((db) => {
    return db
      .all(
        `SELECT id1,id2 FROM usuarios WHERE nomeUsuario = ? OR email=? AND senha
       = ?`,
        [username, username, password]
      )
      .then((res) => res);
  });
}


module.exports = {
  CreateTableMessage,
};
 */
