import React, {useEffect} from 'react';

interface TotalIssuanceInterface {
  success: boolean;
  totalIssuance: string;
  network: string;
  fetchTotalIssuance(): string;
}

const TotalIssuance = ({success, network, totalIssuance, fetchTotalIssuance}: TotalIssuanceInterface) => {
  useEffect(() => {
    fetchTotalIssuance();
  }, []);

  useEffect(() => {
    if (network) {
      fetchTotalIssuance();
    }
  }, [network]);

  return (
    success === true && <div className="text-center m-2 font-weight-normal h6">Total Issuance:  {totalIssuance}</div>
  );
};

export default TotalIssuance;
