import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, EventsPage, NotFound } from './page';
import { MainStyled } from './global.styled';
import { FC } from 'react';
import { ArtistProvider } from './state/providers/artist.provider';
import { ArtistSearchHistory } from './components';

const App: FC = () => {
  return (
    <ArtistProvider>
      <MainStyled />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:artist" component={HomePage} />
          <Route path="/:artist/events" component={EventsPage} />
          <Route path="/artist/history" component={ArtistSearchHistory} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ArtistProvider>
  );
};

export default App;
