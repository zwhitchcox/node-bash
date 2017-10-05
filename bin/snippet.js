#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2))
const fs = require('fs')

const filename = argv.f || argv.filename
const snippetname = argv.s || argv.snippet
const replacements = [].concat(argv.r || argv.replacements).map(r => r.split(','))

require('../snippet')(filename, snippetname, replacements)
