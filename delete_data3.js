var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE employees", function (err, result) {
  if (err) throw err;

  //kita akan menghapus tiga baris pertama dari tabel member yang diurutkan berdasarkan kolom name secara descending (menurun)
  const sql = `DELETE FROM member ORDER BY name DESC LIMIT 3`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
