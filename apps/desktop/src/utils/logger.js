import { captureException } from '@sentry/electron';

const addonErrorMsg = 'Ocean Drive error log [ERROR]: ';

const addonWarnMsg = 'Ocean Drive warning log [WARN]: ';

const addonInfoMsg = 'Ocean Drive info log [INFO]: ';

export function logger(message, type = 'info') {
  let newMessage;

  switch (type) {
    case 'error':
      newMessage = addonErrorMsg + message;
      captureException(newMessage);
      console.error(newMessage);
      break;
    case 'warn':
      newMessage = addonWarnMsg + message;
      captureException(newMessage);
      console.warn(newMessage);
      break;
    default:
      newMessage = addonInfoMsg + message;
      console.log(newMessage);
      break;
  }
}

export function eventLogger(type, eventName) {
  logger(`Triggered ${type} event => ${eventName}`);
}
