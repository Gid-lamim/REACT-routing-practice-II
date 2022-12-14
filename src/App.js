import { Redirect, Route, Switch } from "react-router-dom";

import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'/>
          </Route>
          <Route path='/quotes' exact>
            <Quotes/>
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail/>
          </Route>
          <Route path='/new-quote' >
            <NewQuote/>
          </Route>
          <Route path='*'>
            <PageNotFound/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
