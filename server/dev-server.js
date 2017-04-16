/**
 *  This is the dev server only used in DEVELOPMENT
 *
 *  Default enables only the VueDevServer (equipped with HMR)
 *  if you want to enable other dev servers (may takes longer time)
 *  explicitly pass the argument `-- all`
 *
 *  Also, the dev server will be used by e2e test
 */

var express = require('express')
var path = require('path')
var chalk = require('chalk')
var serverDef = require('./../build/dev-server.def')

var app = express()
var port = serverDef.port
var vueDevServer = serverDef.app

// ASCII art of console message
var devAllMsg = `
    ____  _______    __     ___    __    __ 
   / __ \\/ ____/ |  / /    /   |  / /   / / 
  / / / / __/  | | / /    / /| | / /   / /  
 / /_/ / /___  | |/ /    / ___ |/ /___/ /___
/_____/_____/  |___/    /_/  |_/_____/_____/
`
var devMsg = `
    ____  _______    __   
   / __ \\/ ____/ |  / /   
  / / / / __/  | | / / 
 / /_/ / /___  | |/ /  
/_____/_____/  |___/   
`

// Share `settings` among different modules
let settings
try {
  settings = require(path.resolve(__dirname, '..', './settings_local'))
} catch (e) {
  settings = require(path.resolve(__dirname, '..', './settings'))
}
process.env.settings = JSON.stringify(settings)

// Share host url to different submodules
process.env.url = JSON.stringify(serverDef.url)


// Pass `-- all` flag to enable all routes
var enableAllRoutes = process.argv.indexOf('all') !== -1

// Shows the message in console
var consoleMsg = enableAllRoutes ? devAllMsg : devMsg
console.log(chalk.green.bold(consoleMsg))


if (enableAllRoutes) {
  // Add your submodule routing here
} else {
  console.log('You are running this project in standalone mode. If you don\'t know what that means, you should run \'npm run dev\' instead\n')
}

// Default enables vue-dev-server only
app.use('/', vueDevServer)


console.log('> Starting dev server...')
var server = app.listen(port)


module.exports = {
  ready: serverDef.ready,
  close: () => {
    server.close()
  }
}
