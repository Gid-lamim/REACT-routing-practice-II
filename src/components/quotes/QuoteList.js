import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending){
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  //Here we need to check whether the sorting is ascending
  //queryParams.get('sort') will return the sorting option.
  const isSortingAscending = queryParams.get('sort') === 'asc'; //this will return as false or true

  //to get the sorted quotes we use the helper function
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending); 

  const onSortingHandler = () => {
    history.push('/quotes?sort=' + (isSortingAscending? 'desc' : 'asc'));
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={onSortingHandler}>Sort ID {isSortingAscending? 'descending': 'ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
