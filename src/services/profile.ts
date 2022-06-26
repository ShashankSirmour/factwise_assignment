import axios from 'axios';

export function getAllProfile() {
  return axios.get(`./celebrities.json`);
}
