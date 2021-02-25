import React, {useEffect} from 'react';

interface LastBlockInterface {
  block: string;
  fetchLastSyncedBlock(): string;
}

const LastBlock = ({block, fetchLastSyncedBlock}: LastBlockInterface) => {
  useEffect(() => {
    fetchLastSyncedBlock();
  }, []);

  return (
    <div className="text-center lead m-3">
      Last synced block is {block}.
      <br></br>
    </div>
  );
};

export default LastBlock;
