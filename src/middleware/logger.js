import { createLogger, transports, format } from 'winston';

const logger = createLogger({
    transports: [
        new transports.Console({
            level: 'error',
            format: format.combine(format.timestamp(), format.json()),
        }),
        new transports.File({ filename: 'error.log', level: 'error' }),
    ],
});

export default logger;
