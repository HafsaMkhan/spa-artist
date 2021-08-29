import { FC } from 'react';

export const NoSearchResults: FC = () => {
  return (
    <div className="not-found">
      <img
        data-testid="no-search-results"
        src="/images/not-found.png"
        className="img-fluid"
        alt="No Search Results"
      />
    </div>
  );
};
