#!/usr/bin/env node
const minimist = require('minimist')
const glob = require('glob')
const argv = minimist(process.argv.slice(2))
const fs = require('fs')

findLowestnode_modules(argv._)
function findLowestnode_modules(dirs) {
  Promise.all([...new Array(dirs.length)].map((_, index)  => new Promise((resolve, reject) => {
    const possibleDir = `/${dirs.slice(0,index+1).join('/')}`
    fs.lstat(possibleDir, (err, stat) => {
      if (err) return reject(err)
      if (stat.isDirectory()) {
        const dir = possibleDir
        fs.readdir(dir, (err, files) => {
          if (err) return console.error(err) || reject(err)
          if (files.includes('node_modules')) resolve(dir)
          else resolve(null)
        })
      } else resolve(null)
    })
  })))
    .then((dirs) => {
      const dirsWithnode_modules = dirs.filter(Boolean)
      if (!dirsWithnode_modules.length) process.exit(1)
      const finalDir = dirsWithnode_modules.reduce((prev, cur) => {
        if (cur.length > prev.length) return cur
        else return prev
      }, '')

      process.stdout.write(finalDir)
    })
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
}
