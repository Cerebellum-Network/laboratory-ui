import axios, {AxiosInstance} from 'axios';

import AccountTransactionsService from "./AccountTransactionsService";

const services = {
  AccountTransactionsService: 'AccountTransactionsService',
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
      case services.AccountTransactionsService: {
        return new AccountTransactionsService(httpClientInstance());
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
