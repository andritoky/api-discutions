import * as logger from 'pino'
import * as dayjs from 'dayjs'

export let log = logger.pino({
    base: {
        pid:false
    },
    timestamp: () => ',"time":"'+ dayjs().format() +'"'
})