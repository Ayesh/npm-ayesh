'use strict'

const chalk = require('chalk').default
const boxen = require('boxen').default
const fs = require('fs')
const path = require('path')
const newline = '\n'

// Define options for Boxen
const info = {
  name: 'Ayesh Karunaratne',
  work: 'PHP, Security, Databases, Performance, Architecture',
  web: 'https://aye.sh',
  contact: 'https://ayesh.me/contact',
  github: 'Ayesh',
  npm: 'ayesh',
  gpg: '0x2CA18B2097A7429A',
  ssh: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEUYHEA1oSAnwA0dT1QhJxorqpmxX6ENjAznICIE5yZ9'
}

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  title: info.name,
  titleAlignment: 'center'
}

// Text + chalk definitions
const data = {
  work: chalk.gray(info.work),
  web: chalk.white.bold('        Web:  ') + chalk.cyan(info.web),
  contact: chalk.white.bold('    Contact:  ') + chalk.cyan(info.contact),
  github: chalk.white.bold('     GitHub:  ') + chalk.gray('https://github.com/') + chalk.green(info.github),
  gpg: chalk.white.bold('    GPG Key:  ') + chalk.gray(info.gpg),
  card: chalk.white.bold('       Card:  ') + chalk.red('npx ' + info.npm)
}

const output = data.work + newline +

			   data.web + newline +
			   data.contact + newline +
			   data.github + newline +
			   data.gpg + newline + newline +
               data.card

fs.writeFileSync(path.join(__dirname, 'output'), chalk.green(boxen(output, options)))
