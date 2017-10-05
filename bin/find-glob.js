const minimist = require('minimist')
const glob = require('glob')
const argv = minimist(process.argv.slice(2))

const options = {
  ignore: '/run/**'
}
let globpattern;
if (argv._.length === 2) {
  globpattern = argv._[1]
  options.cwd = argv._[0]
}

console.log(options, globpattern)
glob(globpattern, options, (err, files) => {
  if (err) return console.error(err)
  console.log(files)
})
