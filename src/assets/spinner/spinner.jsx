'use client';

import { Circles } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div>
      <Circles height="80" width="80" color="grey" ariaLabel="loading" />
    </div>
  );
};

export default Spinner;
