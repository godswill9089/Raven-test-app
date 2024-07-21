import axios from 'axios';
const URL =
  process.env.REACT_APP_URL || 'https://integrations.getravenbank.com/v1';
const apiKey =
  process.env.REACT_APP_API_KEY ||
  'RVSEC-8bb756a159b787007fa50b556b45d11d0b49c0c0c0a7b47b3364fa7d094009d2b404a106a71103b9aecb33f73b82f5be-1662632092469';

async function ajax({ method = 'GET', url, data }) {
  let result;
  let contentType = 'application/json';
  if (data.contentType === 'multipart/form-data') {
    contentType = 'multipart/form-data';
  }
  const axiosInstance = axios.create({
    baseURL: URL,
    // timeout: 5000, // Set a timeout if needed
    headers: {
      'Content-Type': contentType,
      Authorization: 'Bearer ' + apiKey,
    },
  });

  await axiosInstance({
    url,
    method,
    data,
  })
    .then((response) => {
      const { data } = response;
      result = data;
    })
    .catch((err) => {
      console.log('response error', err);
    });
  return result;
}

// Send GET Requests
export const get = async (payload) => await ajax({ ...payload, method: 'GET' });

// Send POST Requests
export const post = async (payload) =>
  await ajax({ ...payload, method: 'POST' });

// Send Delete Requests
export const del = async (payload) =>
  await ajax({ ...payload, method: 'DELETE' });

// Send put Requests
export const put = async (payload) => await ajax({ ...payload, method: 'PUT' });
