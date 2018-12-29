'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const info = {
	name: "Ayesh Karunaratne",
	work: "Freelance Software Engineer",
	opensource: "PHP, JS and Infosec",
	twitter: "Ayeshlive",
	github: "Ayesh",
	web: "https://ayesh.me",
	pgp: "0x2CA18B2097A7429A",
	ssh: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEUYHEA1oSAnwA0dT1QhJxorqpmxX6ENjAznICIE5yZ9",
	contact: "https://ayesh.me/contact",
	npx: "ayesh"
}

const card_fields = {
	name: chalk.white('               Ayesh Karunaratne'),
	work: chalk.white('Freelance Software Engineer'),
	opensource: "PHP, JS and Infosec",
	twitter: "Ayeshlive",
	github: "Ayesh",
	web: "https://ayesh.me",
	pgp: "0x2CA18B2097A7429A",
	ssh: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEUYHEA1oSAnwA0dT1QhJxorqpmxX6ENjAznICIE5yZ9",
	contact: "https://ayesh.me/contact",
	npx: "ayesh"
}

const card = {
	name: chalk.white('               Ayesh Karunaratne'),
	work: "Freelance Software Engineer",
	opensource: "PHP, JS and Infosec",
	twitter: "Ayeshlive",
	github: "Ayesh",
	web: "https://ayesh.me",
	pgp: "0x2CA18B2097A7429A",
	ssh: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEUYHEA1oSAnwA0dT1QhJxorqpmxX6ENjAznICIE5yZ9",
	contact: "https://ayesh.me/contact",
	drupal: "Ayesh",
	npx: "ayesh"
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Ayesh Karunaratne'),
  work: chalk.white('Freelance Software Engineer'),
  opensource: chalk.gray('PHP, JS, Databases, Performance and Security'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('ayeshlive'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~ayesh'),
  github: chalk.gray('https://github.com/') + chalk.green('Ayesh'),
  drupal: chalk.gray('https://drupal.org/u/') + chalk.cyan('Ayesh'),
  web: chalk.cyan('https://ayesh.me'),
  npx: chalk.red('npx') + ' ' + chalk.white('ayesh'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
  labelDrupal: chalk.white.bold('     Drupal:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `           ${data.work}`
const opensourcing = `  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const drupaling = `${data.labelDrupal}  ${data.drupal}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               opensourcing + newline + newline + // data.labelOpenSource + data.opensource
			   
			   webing + newline + // data.labelWeb + data.web
			   githubing + newline + // data.labelGitHub + data.github
			   drupaling + newline + // data.labelGitHub + data.github
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + newline + // data.labelnpm + data.npm
               

               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'output'), chalk.green(boxen(output, options)))
