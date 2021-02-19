export interface LaboratoryApiServiceInterface {
  fetchTransactions(query: string, offset: number, limit: number): Promise<any>;
}
