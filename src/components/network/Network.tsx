import React from 'react';

interface Props {
  networkProvider: string;
  network: string;
  onNetworkChange(value: string);
}

const Network = ({networkProvider, network, onNetworkChange}: Props) => {
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
          value="wss://testnet-node-1.cere.network:9944"
          onChange={handleChangeNetwork}
          autoComplete="off"
          defaultChecked
        />
        <label className="btn btn-outline-primary" htmlFor="testnet">
          Tesnet
        </label>
        <input
          type="radio"
          className="btn-check btn-outline-primary"
          name="options"
          id="testnetDev"
          value="wss://testnet-node-1.dev.cere.network:9944"
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
          value="wss://testnet-node-1.dev1.cere.network:9944"
          onChange={handleChangeNetwork}
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="testnetDev1">
          Testnet Dev1
        </label>
      </div>
      <span className="d-flex justify-content-end m-3">{networkProvider}</span>
    </>
  );
};

export default Network;
