export class AccountTransaction {
  constructor(
    readonly transactionHash: string,
    readonly senderId: string,
    readonly signature: string,
    readonly nonce: string,
    readonly method: string,
    readonly args: string,
    readonly success: string
  ) {}
}
