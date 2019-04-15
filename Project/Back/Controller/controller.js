const fs = require('fs');
const express = require('express');



exports.default = (req, res) => {
res.send('hello')
        //  let read = fs.readFileSync('./Model/test.json', 'utf8')
        //  res.write(read)
        //  res.end()
   
}


