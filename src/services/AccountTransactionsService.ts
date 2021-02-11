import {AxiosInstance} from "axios";
import {AccountTransaction} from "../models/AccountTransaction";

export interface AccountTransactionsServiceInterface {
  fetchTransactions(): Promise<any>;
}

class AccountTransactionsService implements AccountTransactionsServiceInterface {
  constructor(public httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  fetchTransactions = async () => {
    // return (await this.httpClient.get('/account-transactions')).data;
    // TODO: Remove after API is ready and uncomment above line
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([
          new AccountTransaction(
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
          ),
          new AccountTransaction(
            'test',
            'test',
            'test',
            'test',
            'test',
            'test',
          ),
        ])
      },1000);
    });
  };
}

export default AccountTransactionsService;
