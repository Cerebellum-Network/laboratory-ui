import React, {useEffect} from 'react';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Peer} from '../../models/Peers';
import TotalIssuance from '../../containers/peers/TotalIssuance';
import TreasuryBalance from '../../containers/peers/TreasuryBalance';

interface PeerProps {
  items: Peer[];
  network: string;
  isLoading: boolean;
  errorMessage: string;

  fetchPeers(): string;
}

const Peers = ({items, network, isLoading, fetchPeers, errorMessage}: PeerProps) => {
  useEffect(() => {
    fetchPeers();
  }, []);

  useEffect(() => {
    if (network) {
      fetchPeers();
    }
  }, [network]);

  return (
    <>
      <TreasuryBalance />
      <TotalIssuance />
      <>
        {isLoading === true ? (
          <>
            <span>
              <FontAwesomeIcon icon={faSpinner} className="mr-2" rotation={180} spin />
            </span>
          </>
        ) : (
          <div>
            {items.length !== 0 ? (
              <>
                <table className="table table-striped table-responsive">
                  <thead>
                    <tr className="d-flex">
                      <th className="col-1" scope="col">
                        #
                      </th>
                      <th className="col-5" scope="col">
                        Peer Id
                      </th>
                      <th className="col-2" scope="col">
                        Roles
                      </th>
                      <th className="col-2" scope="col">
                        IP
                      </th>
                      <th className="col-2" scope="col">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item: Peer, index) => {
                      return (
                        <tr key={index} className="d-flex">
                          <th className="col-1">{index + 1}</th>
                          <td className="col-5">{item.peerId}</td>
                          <td className="col-2">{item.roles}</td>
                          <td className="col-2">{item.ip}</td>
                          <td className="col-2">{item.country}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </>
            ) : (
              <div className="p-5 f40 lato-bold my-auto col-12 bg-light">
                <div className="d-flex justify-content-center">No records found</div>
              </div>
            )}
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </>
    </>
  );
};

export default Peers;
