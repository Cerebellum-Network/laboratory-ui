import {AxiosInstance} from "axios";
import {AccountTransaction} from "../models/AccountTransaction";

export interface AccountTransactionsServiceInterface {
  fetchTransactions(query: string): Promise<any>;
}

class AccountTransactionsService implements AccountTransactionsServiceInterface {
  constructor(public httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  getDestination(method: string, args: string) {
    let result = '';
    switch(method) {
      case 'balances.transferKeepAlive': {
        const parts = args.split(',');
        result = parts[0];
      }
    }

    return result;
  }

  fetchTransactions = async (query: string): Promise<AccountTransaction[]> => {
    const transactions = (await this.httpClient.get(`/account-transactions/${query}`)).data.data;

    return transactions.map(({ senderId, transactionHash, transactionIndex, method, args}) => (new AccountTransaction(
      senderId,
      this.getDestination(method, args),
      transactionHash,
      transactionIndex,
      method,
      (new Date()).toString(), // TODO: get real timestamp
    )));
  };
}

export default AccountTransactionsService;
