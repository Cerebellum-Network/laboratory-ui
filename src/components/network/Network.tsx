import React from 'react';

interface Props {
  network: string;
  onNetworkChange(value: string);
}

const Network = ({network, onNetworkChange}: Props) => {
  function handleChangeNetwork(e: React.ChangeEvent<HTMLInputElement>) {
    onNetworkChange(e.target.value);
  }

  const networks = JSON.parse(process.env.REACT_APP_NETWORKS);

  return (
    <>
      <div className="tab d-flex justify-content-end m-3">
        {networks.map((network) => 
          (
            <>
              <input
                type="radio"
                className="btn-check btn-outline-primary"
                name="options"
                id={network.type}
                value={network.value}
                onChange={handleChangeNetwork}
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor={network.type}>
                {network.value}
              </label>
            </>
          )
        )}
      </div>
      <span className="d-flex justify-content-end m-3">{networks.find((element) => element.value === network).url}</span>
    </>
  );
};

export default Network;
