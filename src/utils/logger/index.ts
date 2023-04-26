import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
    format.colorize(),
    format.printf(
      (info) =>
        `[${info.timestamp}] ${info.level}: ${info.message} ${
          info.metadata ? JSON.stringify(info.metadata) : ''
        }`
    )
  ),
  transports: [new transports.Console()],
});

export default logger;
