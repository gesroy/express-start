var express = require('express')
var router = express.Router()
var contacts = require('../data/contacts.json')
var fs = require('fs')
var path = require('path')

router.get('/', function(req, res, next) {
  res.render('contacts', { contacts })
})

router.post('/', function(req, res, next) {
  contacts = [...contacts, req.body]
  saveToFile('/contacts.json', contacts, err => {
    err && res.send('Sorry, could not write file.')
    res.redirect('/contacts')
  })
})

function saveToFile(filePath, data, callback) {
  fs.writeFile(path.join(__dirname, filePath), JSON.stringify(data), callback)
}

function replaceOldEntry(index, contacts) {
  contacts = [
    ...contacts.slice(0, index),
    newData,
    ...contacts.slice(index + 1),
  ]
}

function findIndex() {
  contacts.findIndex(contact => contact.email === data.email)
  console.log(findIndex())
}

function checkAvailability(contacts, email) {
  return contacts.some(contact => contact.email === email)
}

module.exports = router
