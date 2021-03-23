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
        {networks.map((networkItem, key) =>
          (
            <React.Fragment key={key}>
              <input
                type="radio"
                className="btn-check btn-outline-primary"
                name="options"
                id={networkItem.type}
                value={networkItem.type}
                onChange={handleChangeNetwork}
                autoComplete="off"
                checked={networkItem.type === network}
              />
              <label className="btn btn-outline-primary" htmlFor={networkItem.type}>
                {networkItem.label}
              </label>
            </React.Fragment>
          )
        )}
      </div>
      <span className="d-flex justify-content-end m-3">{networks.find((element) => element.type === network).url}</span>
    </>
  );
};

export default Network;
