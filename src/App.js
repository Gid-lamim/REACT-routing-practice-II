import { Redirect, Route, Switch } from "react-router-dom";

import Quotes from "./pages/quotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/quotes' exact>
          <Quotes/>
        </Route>
        <Route path='/quotes/:quote-id'>
          <QuoteDetail/>
        </Route>
        <Route path='/quotes/new-quote'>
          <NewQuote/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
