// import * as logger from 'pino'
// import * as dayjs from 'dayjs'
import { createLogger, transports , format} from 'winston'

let constomFormat = format.combine(format.timestamp() ,format.printf((info) => {
    return ''+ info.timestamp +' ['+ info.level.toUpperCase().padEnd(7) +  '] - '+ info.message +''
 }))
export let log = createLogger({
    format: constomFormat, 
    level: 'debug',
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logger/app.log'})
    ]
})

