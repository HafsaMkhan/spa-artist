import { FC, Suspense, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { lazyLoader } from 'src/lazy';
import { HeroComponent, FullScreenLoader } from '../../components';

const Artists = lazyLoader(() => import('../../components'), 'Artists');

export const HomePage: FC = () => {
  const { artist } = useParams<{ artist?: string }>();

  return (
    <Fragment>
      <HeroComponent />
      {artist && (
        <Suspense fallback={FullScreenLoader}>
          <Artists />
        </Suspense>
      )}
    </Fragment>
  );
};
