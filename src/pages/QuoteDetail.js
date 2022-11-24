import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

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

    console.log(quote);
    return(<Fragment>
                <h1>Quote detail here</h1>

                <p>Showing details for the quote: {params.quoteId}</p>

                <Route path={`/quotes/${params.quoteId}/comments`}>
                    <h1>comments here</h1>
                </Route>   
           </Fragment>);
}

export default QuoteDetail;