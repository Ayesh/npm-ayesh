#!/usr/bin/env node

'use strict'

const { readFileSync } = require('fs')
const { resolve } = require('path')

try {
  const output = readFileSync(resolve(__dirname, 'output'), 'utf8')
  process.stdout.write(output)
} catch (err) {
  console.error('Error reading output file:', err.message)
  process.exit(1)
}
