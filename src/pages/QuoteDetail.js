import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

const QuoteDetail = () => {
    const params = useParams();


    return(<Fragment>
                <h1>Quote detail here</h1>

                <p>Showing details for the qute: {params.quoteId}</p>

                
           </Fragment>);
}

export default QuoteDetail;