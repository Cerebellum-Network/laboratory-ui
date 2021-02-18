export class AccountTransaction {
  constructor(
    readonly senderId: string,
    readonly destinationId: string,
    readonly transactionHash: string,
    readonly transactionIndex: string,
    readonly method: string,
    readonly timestamp: string,
  ) {}
}
