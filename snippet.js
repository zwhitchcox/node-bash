#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2))
const fs = require('fs')

module.exports = function(filename, snippetname, replacements) {
    if (!snippetname) throw new Error('Snippet Name is required')
    const snippet = fs.readFileSync(`${process.env.HOME}/.snippets/${snippetname}`).toString()
    const replacedSnip = replacements.reduce((snippet, [key, val]) => snippet.replace(key, val), snippet)
    if (filename)
        fs.writeFileSync(filename, replacedSnip)
    else
        process.stdout.write(replacedSnip)
}

