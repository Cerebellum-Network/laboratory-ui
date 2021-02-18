import {AccountTransaction} from "./AccountTransaction";

export class AccountTransactionsWithTotal {
  constructor(
    readonly data: AccountTransaction[],
    readonly total: number,
  ) {}
}
