//-------------------------------------------------------------------
// Login model: login api interface
//-------------------------------------------------------------------

import { base } from '../../common/model.base';


const defaultData = {
  GrantType: 'Password',
  IP: '1',
};

const config = data => ({
  url: 'http://localhost:3500/api/v1/Token',
  type: 'POST',
  data: JSON.stringify({ ...defaultData, ...data }),
  dataType: 'json',
  contentType: 'application/json',
});


export const apiLogin = (data, callback) => {
  base(config(data), callback);
};
