import axios, {AxiosInstance} from 'axios';

import AccountTransactionsService from "./AccountTransactionsService";

const services = {
  AccountTransactionsService: 'AccountTransactionsService',
};

const httpClientInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: 'http://localhost:2015/block-scanner',
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
