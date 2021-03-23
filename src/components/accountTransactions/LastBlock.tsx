import React, {useEffect} from 'react';

interface LastBlockInterface {
  block: string;
  network: string;

  fetchLastSyncedBlock(): string;
}

const LastBlock = ({block, fetchLastSyncedBlock, network}: LastBlockInterface) => {
  useEffect(() => {
    fetchLastSyncedBlock();
  }, []);

  useEffect(() => {
    if (network) {
      fetchLastSyncedBlock();
    }
  }, [network]);

  return (
    <div className="text-center lead m-3">
      Last synced block is {block}.
      <br />
    </div>
  );
};

export default LastBlock;
