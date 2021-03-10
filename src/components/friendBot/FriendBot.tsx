import React, { useEffect } from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FriendBotProps {
  accountKey: string,
  onAccountKeyChanged(value: string),
  network: string,
  onNetworkChanged(value: string),
  submitForm(),
  isLoading: boolean,
  errorMessage: string,
  success: boolean,
}

const FriendBot = (
  {
    accountKey,
    onAccountKeyChanged,
    network,
    onNetworkChanged,
    submitForm,
    isLoading,
    errorMessage,
    success,
  }: FriendBotProps) => {

  function handleChangeAccountKey(e: React.ChangeEvent<HTMLInputElement>) {
    onAccountKeyChanged(e.target.value);
  }

  function handleChangeNetwork(e: React.ChangeEvent<HTMLSelectElement>) {
    onNetworkChanged(e.target.value);
  }
  return (
    <>
      <form autoComplete="off">
        {/* <div className="input-group mb-3">
          <label htmlFor= "publicAddress">Public address</label>
          
          <input
            type="text"
            className="form-control"
            placeholder="Enter public key here"
            aria-label="Enter public key here"
            aria-describedby="button-addon2"
            id = "publicAddress"
            value={accountKey}
            onChange={handleChangeAccountKey}
            autoComplete="off"
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="publicAddress">Public address</label>
          <input
            type="text"
            className="form-control mt-2"
            id="publicAddress"
            aria-describedby="button-addon2"
            placeholder="Enter public address"
            value={accountKey}
            onChange={handleChangeAccountKey}
            autoComplete="off"
          />
        </div>
        <div className="form-group mt-4">
          <label>Network</label>
          <select className="form-control mt-2" id="network" value={network} onChange={handleChangeNetwork}>
            <option value="TestNet">TestNet</option>
            <option value="Dev">Dev</option>
            <option value="Dev1">Dev1</option>
          </select>
        </div>
        <div className="text-center">
          <button
            className="btn mt-4 btn-primary"
            type="button"
            id="button-addon2"
            onClick={submitForm}
            disabled={accountKey === ""}
          >
            <span className="f12">SUBMIT</span>
            {isLoading === true && (
              <span>
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="mr-2"
                  rotation={180}
                  spin
                />
              </span>
            )}
          </button>
        </div>
        {
          success === true && (
            <div className="alert alert-success mt-5" role="alert">
              Congrats! Your transaction has been put in block successfully. Please wait about 15-20 seconds in order to transaction being finalized.
            </div>
          )
        }
        {
          errorMessage && (
            <div className="alert alert-danger mt-5" role="alert">
              {errorMessage}
            </div>
          )
        }
      </form>
    </>
  );
};

export default FriendBot;
