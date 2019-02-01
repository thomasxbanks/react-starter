import axios from 'axios';
import Config from 'helpers/config';

const DataHandler = passedData => new Promise((resolve, reject) => {
  const {
    action, body, id,
  } = passedData;
  const axiosData = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: Config.apiEndpoint[action].method,
    url: Config.apiEndpoint.base + Config.apiEndpoint[action].endpoint,
  };
  if (id) {
    axiosData.url += id;
  }

  if (body) {
    axiosData.data = body;
  }

  console.log('axiosData =', axiosData);

  axios(axiosData)
    .then((response) => {
      console.log('response', response);
      resolve(response);
    })
    .catch((error) => {
      console.error('API call has failed\n', error);
      reject(error);
    });
});
export default DataHandler;
