import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./page";
import { MainStyled } from "./global.styled";

function App() {
  return (
    <div>
      <MainStyled />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
