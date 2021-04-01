export class DdcMetrics {
  constructor(
    readonly nodesCount: string,
    readonly totalPartitions: string,
    readonly reservedPartitions: string,
    readonly availablePartitions: string,
  ) {}
}
