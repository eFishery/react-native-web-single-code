import { applyMiddleware, createStore, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import axios from 'axios';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from './rootReducer';

const persistStorage = (store, options, callback) => {
  AsyncStorage.getItem('reduxPersist:appVersion')
    .then((itemValue) => {
      const getPersistedStore = () => persistStore(
        store,
        { storage: AsyncStorage, ...options },
        callback,
      );
      if (itemValue) {
        // If version is identified
        const app = JSON.parse(itemValue);

        if (app && app.version !== process.env.bundleHash) {
          getPersistedStore().purge();
        } else {
          getPersistedStore(); // .purge to clean the offline data
        }
      } else {
        // If no, define one
        // console.error(process.env.bundleHash);
        AsyncStorage.setItem(
          'reduxPersist:appVersion',
          JSON.stringify({ version: process.env.bundleHash }),
        );
      }
    });
};

const reduxOfflineConfig = {
  ...offlineConfig,
  persist: persistStorage,
  effect: effect => axios(effect),
  discard: (error, action, retries) => {
    const { response } = error;

    return (response && response.status >= 400) || retries > 10;
  },
};

const myMiddlewares = [];

if (process.env.NODE_ENV !== 'production') {
  myMiddlewares.push(logger);
}

const store = createStore(
  rootReducer,
  // preloadedState,
  compose(
    applyMiddleware(...myMiddlewares),
    offline(reduxOfflineConfig),
  ),
);

export default store;
