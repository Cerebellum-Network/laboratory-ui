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
    const transactions = (await this.httpClient.get(`account-transaction/${query}`)).data;
    const { data, count } = transactions;
    console.log(`data: ${data}`);
    return data.map(({transactionHash, senderId, signature, args, nonce, method, success}) => (new AccountTransaction(
       transactionHash,
       senderId,
       signature,
      nonce,
      method,
       args,
       success
    )));
  };
}

export default AccountTransactionsService;
