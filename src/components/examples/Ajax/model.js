import { base } from './model.base';

const config = {
  url: 'http://openlibrary.org/recentchanges.json?limit=10',
  type: 'GET'
};

export const api = (callback) => {
  base(config, callback);
};

const config2 = {
  url: 'http://openlibrary.org/recentchanges.json?limit=20',
  type: 'GET'
};

export const api2 = (callback) => {
  base(config2, callback);
};
