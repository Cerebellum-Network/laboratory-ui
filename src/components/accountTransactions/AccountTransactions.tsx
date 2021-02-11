import React from 'react';
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {AccountTransaction} from "../../models/AccountTransaction";

interface AccountTransactionsProps {
  items: AccountTransaction[];
  searchAccount: string;
  isLoading: boolean;

  onSearchAccountChanged(value: string): void;

  fetchTransactions(): void;
}

const AccountTransactions = ({items, searchAccount, isLoading, onSearchAccountChanged, fetchTransactions}: AccountTransactionsProps) => {
  function handleSearchAccountChanged(e: React.ChangeEvent<HTMLInputElement>) {
    onSearchAccountChanged(e.target.value);
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
            value={searchAccount}
            onChange={handleSearchAccountChanged}
            autoComplete="off"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={fetchTransactions}
            disabled={searchAccount === "" ? true : false}
          >
            <span className="f12">SEARCH</span>
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
      </form>

      <div className="table-responsive">
        {items.length !== 0 ? (
          <table className="table table-hover">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Time stamp</th>
              <th scope="col">Block Hash</th>
              <th scope="col">Sender</th>
              <th scope="col">Destination</th>
              <th scope="col">Type</th>
              <th scope="col">Block Number</th>
            </tr>
            </thead>

            <tbody>
            {items.map((item: AccountTransaction, index) => {
              return (
                <tr key={index}>
                  <td scope="row">{index}</td>
                  <td>{item.timestamp}</td>
                  <td>{item.blockHash}</td>
                  <td>{item.senderId}</td>
                  <td>{item.recipientId}</td>
                  <td>{item.type}</td>
                  <td>{item.height}</td>
                </tr>
              );
            })}
            </tbody>
          </table>
        ) : (
          <div className="p-5 f40 lato-bold my-auto col-12 bg-light">
            <div className="d-flex justify-content-center">
              No records found
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AccountTransactions;
