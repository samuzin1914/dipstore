var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/',  function(req, res) {
  // const{email,senha} = req.body
  console.log(req.body)

  res.send('chegou aqui');
});

module.exports = router;
