import React from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Users from './components/users';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing';

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>
      </Switch>
    </Router>
    </ApolloProvider>
  );
}

export default App;
