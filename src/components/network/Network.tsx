import React from 'react';
import {Networks} from './network.enum';
import {NetworksProvider} from './networkProvider.enum';

interface Props {
  network: string;
  onNetworkChange(value: string);
}

const Network = ({network, onNetworkChange}: Props) => {
  function handleChangeNetwork(e: React.ChangeEvent<HTMLInputElement>) {
    onNetworkChange(e.target.value);
  }

  return (
    <>
      <div className="tab d-flex justify-content-end m-3  ">
        <input
          type="radio"
          className="btn-check btn-outline-primary"
          name="options"
          id="testnet"
          value={Networks.testnet}
          onChange={handleChangeNetwork}
          autoComplete="off"
          defaultChecked
        />
        <label className="btn btn-outline-primary" htmlFor="testnet">
          Testnet
        </label>
        <input
          type="radio"
          className="btn-check btn-outline-primary"
          name="options"
          id="testnetDev"
          value={Networks.testnetDev}
          onChange={handleChangeNetwork}
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="testnetDev">
          Testnet Dev
        </label>
        <input
          type="radio"
          className="btn-check btn-outline-primary"
          name="options"
          id="testnetDev1"
          value={Networks.testnetDev1}
          onChange={handleChangeNetwork}
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="testnetDev1">
          Testnet Dev1
        </label>
      </div>
      <span className="d-flex justify-content-end m-3">{NetworksProvider[network]}</span>
    </>
  );
};

export default Network;
