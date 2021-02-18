export interface AccountTransactionsServiceInterface {
  fetchTransactions(query: string, offset: number, limit: number): Promise<any>;
}
