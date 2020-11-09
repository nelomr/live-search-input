import client from '@/services/client.js';
let path = 'people/';

export function initApi(){
  return  client.get(path)
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      throw error;
    })
}

export function getPerson(id){
  return  client.get(`${path}${id}/`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    })
}

