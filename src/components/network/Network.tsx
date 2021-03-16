import React from 'react';

interface Props {
  network: string;
  onNetworkChange(value: string);
}

const Network = ({network, onNetworkChange}: Props) => {
  function handleChangeNetwork(e: React.ChangeEvent<HTMLInputElement>) {
    onNetworkChange(e.target.value);
  }

  const networks = {
    "TESTNET": "wss://testnet-node-1.cere.network:9944",
    "TESTNET_DEV": "wss://testnet-node-1.dev.cere.network:9944",
    "TESTNET_DEV1": "wss://testnet-node-1.dev1.cere.network:9944"
  }

  return (
    <>
      <div className="tab d-flex justify-content-end m-3  ">
        <input
          type="radio"
          className="btn-check btn-outline-primary"
          name="options"
          id="testnet"
          value="TESTNET"
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
          value="TESTNET_DEV"
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
          value="TESTNET_DEV1"
          onChange={handleChangeNetwork}
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="testnetDev1">
          Testnet Dev1
        </label>
      </div>
      <span className="d-flex justify-content-end m-3">{networks[network]}</span>
    </>
  );
};

export default Network;
