import React, {useEffect} from 'react';

interface TreasuryBalanceInterface {
  TreasuryBalSuccess: boolean;
  treasuryBalance: string;
  network: string;
  fetchTreasuryBalance(): string;
}

const TreasuryBalance = ({
  TreasuryBalSuccess,
  network,
  treasuryBalance,
  fetchTreasuryBalance,
}: TreasuryBalanceInterface) => {
  useEffect(() => {
    fetchTreasuryBalance();
  }, []);

  useEffect(() => {
    if (network) {
      fetchTreasuryBalance();
    }
  }, [network]);

  return (
    TreasuryBalSuccess === true && (
      <div className="text-center m-2 font-weight-normal h6">Treasury Balance:  {treasuryBalance}</div>
    )
  );
};

export default TreasuryBalance;
