export class AccountTransaction {
  constructor(
    readonly timestamp: string,
    readonly blockHash: string,
    readonly senderId: string,
    readonly recipientId: string,
    readonly type: string,
    readonly height: string,
  ) {}
}
