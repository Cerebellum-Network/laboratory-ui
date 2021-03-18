import {AxiosInstance} from 'axios';
import {AccountTransaction} from '../models/AccountTransaction';
import {LaboratoryApiServiceInterface} from './LaboratoryApiServiceInterface';
import {AccountTransactionsWithTotal} from '../models/AccountTransactionsWithTotal';
import {Networks} from '../components/network/network.enum';

class LaboratoryApiService implements LaboratoryApiServiceInterface {
  constructor(public httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  private getDestination(method: string, args: string) {
    let result = '';
    switch (method) {
      case 'balances.transferKeepAlive': {
        const parts = args.split(',');
        result = parts[0];
      }
    }

    return result;
  }

  fetchTransactions = async (query: string, offset: number, limit: number): Promise<AccountTransactionsWithTotal> => {
    const transactions = (
      await this.httpClient.get(`/block-scanner/account-transactions/${query}?offset=${offset}&limit=${limit}`)
    ).data;

    return new AccountTransactionsWithTotal(
      transactions.data.map(
        ({senderId, transactionHash, transactionIndex, method, args, timestamp}) =>
          new AccountTransaction(
            senderId,
            this.getDestination(method, args),
            transactionHash,
            transactionIndex,
            method,
            timestamp,
          ),
      ),
      transactions.balance,
      transactions.count,
      transactions.block,
    );
  };

  fetchLastSyncedBlock = async (): Promise<any> => {
    const block = (await this.httpClient.get(`/block-scanner/latest-block`)).data;
    return block;
  };
  postFriendBotAssetRequest = async (destination: string, network: Networks) => {
    return (await this.httpClient.post(`/friend-bot/request-assets`, {destination, network})).data;
  };

  getBlockNumber = async () => {
    return (await this.httpClient.get(`/block-scanner/latest-block`)).data;
  };

  getPeer = async () => {
    const peer = (await this.httpClient.get(`/peer/details/TestNet`)).data;
    return peer;
  };
}

export default LaboratoryApiService;
