export class Peer {
  constructor(
    readonly peerId: string,
    readonly roles: string,
    // readonly bestNumber: string,
    // readonly hash: string,
    readonly ip: string,
  ) {}
}
