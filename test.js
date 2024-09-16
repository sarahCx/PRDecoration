
// Vulnerable JavaScript Code

// Insecure use of eval() - allows code execution from user input
function executeUserCode(userInput) {
  eval(userInput);  // Dangerous: eval can execute malicious code!
}

// SQL Injection - unsanitized input in SQL queries
const userId = req.query.id;
db.query("SELECT * FROM users WHERE id = " + userId, function(err, result) {
  if (err) throw err;
  console.log(result);
});

// Insecure cryptographic practice - using a weak hashing algorithm
const crypto = require('crypto');
const hash = crypto.createHash('md5').update('password').digest('hex');  // MD5 is weak!
console.log(hash);

// Insecure file upload - missing validation for uploaded files
app.post('/upload', function(req, res) {
  const file = req.files.file;
  file.mv('/uploads/' + file.name, function(err) {
    if (err) return res.status(500).send(err);
    res.send('File uploaded!');
  });
});
