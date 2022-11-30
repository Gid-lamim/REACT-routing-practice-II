import { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

//The same quotes will be created here. These quotes will be fetched from a database in a real-world project anyways.
//Every quote will be an object with an ID, author and the quote itself.
const DUMMY_QUOTES = [
    {id:'q1', author: 'Somebody', text:'Shit happens'},
    {id:'q2', author: 'Oscar Wilde', text:'Be yourself; everyone else is already taken.'},
    {id:'q3', author: 'Frank Zappa', text:'So many books, so little time.'},
    {id:'q4', author: 'Marcus Tullius Cicero ', text:'A room without books is like a body without a soul.'},
    {id:'q5', author: ' Mahatma Gandhi ', text:'Be the change that you wish to see in the world.'}
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find( quote => quote.id === params.quoteId);

    //We also need to handle undefined inputs. In case a user manually inputs an id that doesn't exist.
    if(!quote){
        return <h2>Quote not found</h2>
    }

    return(<Fragment>
                <h1>Quote detail here</h1>
                
                <HighlightedQuote text={quote.text} author={quote.author}/>

                <div className="centered">
                    <Route  path={`/quotes/${params.quoteId}`} exact>
                        <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
                            Load comments
                        </Link>
                    </Route>
                </div>
                <Route path={`/quotes/${params.quoteId}/comments`}>
                    <h1>comments here</h1>
                    <p>Showing comments for the quote with id: {params.quoteId}</p>
                </Route>   
           </Fragment>);
}

export default QuoteDetail;