import { AccountTransactionsWithTotal } from "../models/AccountTransactionsWithTotal";
import { Networks } from "./networks.enum";

export interface LaboratoryApiServiceInterface {
  fetchTransactions(query: string, network: Networks, offset: number, limit: number): Promise<AccountTransactionsWithTotal>;
}
