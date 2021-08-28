import { FC, Suspense, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { lazyLoader } from '../../lazy';
import { HeroComponent, FullScreenLoader } from '../../components';
import { ShouldRender } from 'should-render';

const Artists = lazyLoader(() => import('../../components'), 'Artists');

export const HomePage: FC = () => {
  const { artist } = useParams<{ artist?: string }>();

  return (
    <Fragment>
      <HeroComponent />
      <ShouldRender if={!!artist}>
        <Suspense fallback={FullScreenLoader}>
          <Artists />
        </Suspense>
      </ShouldRender>
    </Fragment>
  );
};
