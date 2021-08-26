import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./page";
import { MainStyled } from "./global.styled";
import { FullScreenLoader } from "./components/loader";

function App() {
  return (
    <div>
      <MainStyled />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/loader" component={FullScreenLoader} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
