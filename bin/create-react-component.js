t argv = require('minimist')(process.argv.slice(2))
const fs = require('fs')

const name = argv._


const path = argv.f && (argv.p || argv.path || process.cwd())
const snippetname = `react-component${argv.m ? '-mobx' : ''}.js`
const replacements = [['$classname', name.map(capitalizeFirstLetter).join('')]]
const filename = path && path + '/' + name.map(ns => ns.toLowerCase()).join('-')+'.js'
if (!filename) replacements.push('default ', '')


require('../snippet')(filename, snippetname, replacements)

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
