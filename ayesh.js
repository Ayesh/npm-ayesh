#!/usr/bin/env node

'use strict'

const { readFileSync } = require('fs')
const { resolve } = require('path')

try {
  const output = readFileSync(resolve(__dirname, 'output'), 'utf8')
  console.log(output)
} catch (err) {
  console.log('Error reading output file:', err.message)
  process.exit(1)
}
