import {AccountTransaction} from "./AccountTransaction";

export class AccountTransactionsWithTotal {
  constructor(
    readonly data: AccountTransaction[],
    readonly balance: string,
    readonly total: number,
    readonly block: number,
  ) {}
}
