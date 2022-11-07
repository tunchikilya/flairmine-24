npm install mineflayer
const mineflayer = require('mineflayer');

console.log('Старт...')

function createBot () {
    const bot = mineflayer.createBot({
    host: "flairmine.aternos.me",
    port: "39501",
    username: "Flair",
    version: false
    })
    bot.on('login', function() {
      bot.chat('/reg HTKdv1ik HTKdv1ik')
    })
    bot.on('chat', (username, message) => {
      if (username === bot.username) return
      target = bot.players[username].entity
      let entity
      switch (message) {
        case ';start':
          bot.setControlState('forward', true)
          bot.setControlState('jump', true)
          bot.setControlState('sprint', true)
          break
          case ';stop':
            bot.clearControlStates()
            break
          }
        })
        bot.on('spawn', function() {
          bot.chat('Spawned')
        })
        bot.on('death', function() {
          bot.chat('I died, respawn')
        })
        bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
        bot.on('error', err => console.log(err))
        bot.on('end', createBot)
}
createBot()
