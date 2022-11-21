import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/quotes' exact>

        </Route>
        <Route path='/quotes/:quote-id'>
          
        </Route>
        <Route path='/quotes/new-quote'>
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
