import React, { useEffect } from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Peer } from '../../models/Peers';

interface PeerProps {
  items: Peer[];
  network: string;
  isLoading: boolean;
  fetchPeers(): string;
}

const Peers = ({ items, network, isLoading, fetchPeers }: PeerProps) => {
  useEffect(() => {
    fetchPeers();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <>
          <span>
            <FontAwesomeIcon
              icon={faSpinner}
              className="mr-2"
              rotation={180}
              spin
            />
          </span>
        </>
      ) : (
        <div>
          {
            items.length !== 0 ? (
              <>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Peer Id</th>
                      <th scope="col">Roles</th>
                      <th scope="col">IP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item: Peer, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.peerId}</td>
                          <td>{item.roles}</td>
                          <td>{item.ip}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </>
            ) : (
              <div className="p-5 f40 lato-bold my-auto col-12 bg-light">
                <div className="d-flex justify-content-center">
                  No records found
          </div>
              </div>
            )
          }
        </div>
      )
      }
    </>
  )
}


export default Peers;