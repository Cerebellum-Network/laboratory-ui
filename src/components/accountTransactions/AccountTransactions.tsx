import React from 'react';
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {AccountTransaction} from "../../models/AccountTransaction";
import Pagination from "./Pagination";
import LastBlock from "../../containers/accountTransactions/LastBlock";
import Balance from '../../containers/accountTransactions/Balance';
import {Networks} from "../../services/networks.enum";

const txOnPage = +process.env.REACT_APP_ROWS_ON_PAGE;
const blockViewerUrl = process.env.REACT_APP_BLOCK_VIEWER_URL;
const networks = JSON.parse(process.env.REACT_APP_NETWORKS);

interface AccountTransactionsProps {
  network: Networks;
  items: AccountTransaction[];
  itemsTotal: number;
  currentPage: number;
  searchAccount: string;
  isLoading: boolean;

  onSearchAccountChanged(value: string): void;

  fetchTransactions(page: number): void;
}

const AccountTransactions = (
  {
    network,
    items,
    searchAccount,
    isLoading,
    onSearchAccountChanged,
    fetchTransactions,
    itemsTotal,
    currentPage,
  }: AccountTransactionsProps) => {
  function handleSearchAccountChanged(e: React.ChangeEvent<HTMLInputElement>) {
    onSearchAccountChanged(e.target.value);
  }

  const { url: networkUrl } = networks.find((networkItem) => networkItem.type === network);

  return (
    <>
      <LastBlock />
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
            onClick={fetchTransactions.bind(this, currentPage)}
            disabled={searchAccount === ""}
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
        <Balance />
        {items.length !== 0 ? (
          <>
            <table className="table table-hover">
              <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Transaction Hash</th>
                <th scope="col">Block Hash</th>
                <th scope="col">Sender</th>
                <th scope="col">Destination</th>
                <th scope="col">Timestamp</th>
                <th scope="col">Extrinsic</th>
              </tr>
              </thead>

              <tbody>
              {items.map((item: AccountTransaction, index) => {
                return (
                  <tr key={index}>
                    <td scope="row">{index + txOnPage * (currentPage - 1) + 1}</td>
                    <td>{item.transactionHash}</td>
                    <td>{blockViewerUrl
                      ? <a href={`${blockViewerUrl}/?rpc=${encodeURIComponent(networkUrl)}/#/explorer/query/${item.blockHash}`} target="_blank">{item.blockHash}</a>
                      : item.blockHash
                    }</td>
                    <td>{item.senderId}</td>
                    <td>{item.destinationId}</td>
                    <td>{item.timestamp}</td>
                    <td>{item.method}</td>
                  </tr>
                );
              })}
              </tbody>
            </table>
            <Pagination
              selectPage={fetchTransactions}
              total={itemsTotal}
              current={currentPage}
            />
          </>
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
