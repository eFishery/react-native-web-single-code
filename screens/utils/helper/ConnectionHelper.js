import axios from 'axios';

const sendHeadRequest = () => axios({
  method: 'head',
  url: 'https://dog.ceo/api/breeds/list/all',
}).then(() => ({ type: 'web' , effectiveType: 'web' }));

export default sendHeadRequest;
