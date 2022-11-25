import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import Quotes from "./Quotes";


const NewQuote = () => {
    const history = useHistory();

    const QuoteSubitionHandler = (props) => {
        console.log(props);

        //Now here I'll use another hook, the useHistory.
        //this way, upon subbimition, the user will be navigated away onto another page.
        //https://v5.reactrouter.com/web/api/Hooks

        history.push("/quotes");
        //push allows the user to go back.

    }

    return <Fragment>
            <h1>New quote page</h1>
            <QuoteForm onAddQuote={QuoteSubitionHandler}/>
        </Fragment>

}

export default NewQuote;