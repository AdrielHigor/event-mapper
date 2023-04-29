import axios from 'axios'
import constants from '../utils/Constants';

export const api_url = constants.event_service_url;

export const mainAPI = axios.create({
  baseURL: api_url,
});