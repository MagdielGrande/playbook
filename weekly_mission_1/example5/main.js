const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.log('This is an informational message')



const customed = new logger.constructor('peper')
customed.log('mensaje tal vez')
/*
También pueder instanciar uno nuevo de esta manera:
  const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
*/