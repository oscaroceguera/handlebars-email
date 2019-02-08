const server = require('express')()
const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')

const source = fs.readFileSync(path.join(__dirname, 'confirm.hbs'), 'utf8')
const template = Handlebars.compile(source)



server.get('/', (req, res) => {
  res.send(template({userName: 'oscaroce', code: 123323}))
})

server.listen(5000, () => console.log('listening in 5000'))