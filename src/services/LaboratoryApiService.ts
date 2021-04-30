import {AxiosInstance} from 'axios';
import {AccountTransaction} from '../models/AccountTransaction';
import {LaboratoryApiServiceInterface} from './LaboratoryApiServiceInterface';
import {AccountTransactionsWithTotal} from '../models/AccountTransactionsWithTotal';
import {Networks} from './networks.enum';

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

  fetchTransactions = async (
    query: string,
    network: Networks,
    offset: number,
    limit: number,
  ): Promise<AccountTransactionsWithTotal> => {
    const transactions = (
      await this.httpClient.get(
        `/block-scanner/account-transactions/${query}/${network}?offset=${offset}&limit=${limit}`,
      )
    ).data;

    return new AccountTransactionsWithTotal(
      transactions.data.map(
        ({senderId, transactionHash, blockHash, transactionIndex, method, args, timestamp}) =>
          new AccountTransaction(
            senderId,
            this.getDestination(method, args),
            transactionHash,
            transactionIndex,
            blockHash,
            method,
            timestamp,
          ),
      ),
      transactions.balance,
      transactions.count,
      transactions.block,
    );
  };

  fetchLastSyncedBlock = async (network): Promise<any> => {
    return (await this.httpClient.get(`/block-scanner/latest-block/${network}`)).data;
  };
  postFriendBotAssetRequest = async (destination: string, network: Networks) => {
    return (await this.httpClient.post(`/friend-bot/request-assets`, {destination, network})).data;
  };

  getPeer = async (network: string) => {
    return (await this.httpClient.get(`/peer/details/${network}`)).data;
  };

  treasuryBalance = async (network: string) => {
    return (await this.httpClient.get(`/peer/treasury-balance/${network}`)).data;
  };

  totalIssuance = async (network: string) => {
    return (await this.httpClient.get(`/peer/total-issuance/${network}`)).data;
  };

  ddcMetrics = async () => {
    return (await this.httpClient.get(`/peer/ddc-metrics`)).data;
  };
}

export default LaboratoryApiService;
