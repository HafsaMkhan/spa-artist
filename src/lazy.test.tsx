import { render } from '@testing-library/react';
import { Suspense } from 'react';
import { lazyLoader } from './lazy';

describe('tests for lazy loading custom function />', () => {
  it('test lazyLoading for default imports', () => {
    const App = lazyLoader(() => import('./App'));
    render(
      <Suspense fallback={<h2>Loading</h2>}>
        <App />
      </Suspense>
    );
  });

  it('test lazyLoading for named imports', () => {
    const Home = lazyLoader(() => import('./page'), 'HomePage');
    render(
      <Suspense fallback={<h2>Loading</h2>}>
        <Home />
      </Suspense>
    );
  });
});
