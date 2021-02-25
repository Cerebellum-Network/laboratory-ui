import React from 'react';

interface BalanceInterface {
  success: boolean;
  balance: string;
}

const Balance = ({success, balance}: BalanceInterface) => {
  return success === true && (<div className=" text-center fs-5 pb-4">Your account balance is {balance}</div>);
};

export default Balance;
