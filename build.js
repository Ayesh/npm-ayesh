'use strict'

const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');
const newline = '\n';

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

const info = {
	name: "Ayesh Karunaratne",
	work: "PHP, Security, Databases, Performance, Architecture",
	web: "https://aye.sh",
	contact: "https://ayesh.me/contact",
	github: "Ayesh",
	gpg: "0x2CA18B2097A7429A",
	ssh: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEUYHEA1oSAnwA0dT1QhJxorqpmxX6ENjAznICIE5yZ9",
};

// Text + chalk definitions
const data = {
  name: chalk.white.bold('             ' + info.name),
  work: chalk.gray(info.work),
  web: chalk.white.bold(    '        Web:  ') + chalk.cyan(info.web),
  contact: chalk.white.bold('    Contact:  ') + chalk.cyan(info.contact),
  github: chalk.white.bold( '     GitHub:  ') + chalk.gray('https://github.com/') + chalk.green(info.github),
  gpg: chalk.white.bold(    '    GPG Key:  ') + chalk.gray(info.gpg),
  card: chalk.white.bold(   '       Card:  ') + chalk.red('npx ' + info.npm)
};

const output = data.name +
               newline + newline +
               data.work + newline + newline +
			   
			   data.web + newline +
			   data.contact + newline +
			   data.github + newline +
			   data.gpg + newline + newline +
               data.card

fs.writeFileSync(path.join(__dirname, 'output'), chalk.green(boxen(output, options)));
