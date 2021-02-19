import axios, {AxiosInstance} from 'axios';

import LaboratoryApiService from "./LaboratoryApiService";

const services = {
  LaboratoryApiService: 'LaboratoryApiService',
};

const httpClientInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 15000,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
    },
  });
};

class ServiceLocator {
  static getInstance(serviceName: string) {
    switch (serviceName) {
      case services.LaboratoryApiService: {
        return new LaboratoryApiService(httpClientInstance());
      }

      default:
        throw new Error('Unknown service!');
    }
  }
}

export {
  ServiceLocator,
  services,
}
