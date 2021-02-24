import React from 'react';
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface BalanceProps {
  accountKey: string,
  onAccountKeyChanged(value: string),
  submitForm(),
  isLoading: boolean,
  errorMessage: string,
  success: boolean,
}

const Balance = (
  {
    accountKey,
    onAccountKeyChanged,
    submitForm,
    isLoading,
    errorMessage,
    success,
  }: BalanceProps) => {

  function handleChangeAccountKey(e: React.ChangeEvent<HTMLInputElement>) {
    onAccountKeyChanged(e.target.value);
  }

  return (
    <>
      <form autoComplete="off">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter public key here"
            aria-label="Enter public key here"
            aria-describedby="button-addon2"
            value={accountKey}
            onChange={handleChangeAccountKey}
            autoComplete="off"
          />
          <button
            className="btn btn-outline-secondary"
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
            <div className="alert alert-success" role="alert">
              Congrats! Your transaction has been put in block successfully. Please wait about 15-20 seconds in order to transaction being finalized.
            </div>
          )
        }
        {
          errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )
        }
      </form>
    </>
  );
};

export default Balance;
