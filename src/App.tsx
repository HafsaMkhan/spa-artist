import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, EventsPage, NotFound } from "./page";
import { MainStyled } from "./global.styled";

function App() {
  return (
    <div>
      <MainStyled />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/events/:artist" component={EventsPage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
