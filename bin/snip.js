#!/usr/bin/env node
const minimist = require('minimist')
const argv = minimist(process.argv.slice(2))

const cmd = argv._

if (!cmd.length > 0) usage()

function usage() {
  console.log(
  `
  node-vim-snip
    import {module name} 
  `
}
