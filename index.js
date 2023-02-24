const Discord = require("discord.js")
const fetch = require("node-fetch")
const client = new Discord.Client()

const int count = 0;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
    print('We have logged in as {0.user}'.format(client))
    curTime = time.localtime()
    current_time = time.strftime("%H:%M:%S", curTime)
})

client.on("message", msg => {
  if (msg.author.bot) return
    
  if (msg.content.startswith === "$hi") {
	count += 1
    msg.channel.send('Hello, you have typed ' + str(count) + ' times in the chat')
  }
})

client.login('MTA3ODc1MTIxNDg2MDI1OTM1OA.GtVURG.-LdoqQbPsBNs_t3_EbK_RVhNhH5s3O3oGopvBc')