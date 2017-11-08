import sendHeadRequest from './ConnectionHelper';
import ConnectionError from './ConnectionError';

const getDeviceConnection = () => new Promise((resolve) => {
  if (window.navigator.onLine) {
    // If online, resolve the sendHeadRequest promise
    resolve(sendHeadRequest());
  } else {
    // If not online, throw exception
    throw new ConnectionError({ request: {}, response: undefined });
  }
});

export default getDeviceConnection;
