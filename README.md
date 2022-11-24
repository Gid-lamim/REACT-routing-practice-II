REACT Routing project II

---

In this repository, I'm practicing with ReactJs routing again. This time the project is to build a page with quotes. 
It will use routes to show a page with quotes details and a page with a form to add new quotes.  

It is a project by  @Maximilian Schwarzmüller (link to the course below) 

---


## Quotes page

![searchbar](./Pics/quotesPage.png)

## Routes

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
