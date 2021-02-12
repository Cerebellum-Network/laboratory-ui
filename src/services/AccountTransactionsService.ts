import {AxiosInstance} from "axios";
import {AccountTransaction} from "../models/AccountTransaction";

export interface AccountTransactionsServiceInterface {
  fetchTransactions(query: string): Promise<any>;
}

class AccountTransactionsService implements AccountTransactionsServiceInterface {
  constructor(public httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  fetchTransactions = async (query: string) => {
    const transactions = (await this.httpClient.get(`/account-transactions/${query}`)).data;

    return transactions.map(({timestamp, blockHash, authorPublicKey, destinationPublicKey}) => (new AccountTransaction(
      timestamp,
      blockHash,
      authorPublicKey,
      destinationPublicKey,
      '',
      ','
    )));
  };
}

export default AccountTransactionsService;
