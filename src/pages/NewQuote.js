import { Fragment } from "react";
import QuoteForm from "../components/quotes/QuoteForm";


const NewQuote = () => {

    const QuoteSubitionHandler = (props) => {
        console.log(props);
    }

    return <Fragment>
            <h1>New quote page</h1>
            <QuoteForm onAddQuote={QuoteSubitionHandler}/>
        </Fragment>

}

export default NewQuote;