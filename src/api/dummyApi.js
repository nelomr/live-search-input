import client from '@/services/client.js';
const path = 'people/';

export function initApi(){
  return  client.get(path)
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      throw error;
    })
}
