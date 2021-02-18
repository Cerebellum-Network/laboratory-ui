import {AxiosInstance} from "axios";
import {AccountTransaction} from "../models/AccountTransaction";
import {AccountTransactionsServiceInterface} from "./AccountTransactionsServiceInterface";
import {AccountTransactionsWithTotal} from "../models/AccountTransactionsWithTotal";

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

  fetchTransactions = async (query: string, offset: number, limit: number): Promise<AccountTransactionsWithTotal> => {
    const transactions = (await this.httpClient.get(`/account-transactions/${query}?offset=${offset}&limit=${limit}`)).data;

    return new AccountTransactionsWithTotal(
      transactions.data.map(({ senderId, transactionHash, transactionIndex, method, args, timestamp}) => (new AccountTransaction(
        senderId,
        this.getDestination(method, args),
        transactionHash,
        transactionIndex,
        method,
        timestamp,
      ))),
      transactions.count,
    );
  };
}

export default AccountTransactionsService;
