import { NetInfo } from 'react-native';
import sendHeadRequest from './ConnectionHelper';
import ConnectionError from './ConnectionError';

const getDeviceConnection = () => NetInfo.getConnectionInfo()
  .then(({ type, effectiveType }) => {
    if (type === 'wifi' || type === 'cellular') {
      // If type is wifi or cellular, it means it could be online
      return sendHeadRequest();
    } else {
      // If type is none, it is offline, therefore, throw exception
      throw new ConnectionError({ request: {}, response: undefined });
    }
  });

export default getDeviceConnection;
