import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import httpClient from './utilities/httpClient';
import './App.css';

class App extends Component {

  state = {
    currentUser: httpClient.getCurrentUser()
  }

  onAuthSuccess = () => {
    this.setState({ currentUser: httpClient.getCurrentUser() });
  }

  onLogout = () => {
    httpClient.logOut();
    this.setState({ currentUser: null })
  }

  render() {
    return (
      <Layout>
        <div className="ui center aligned container">
          <h1>Still Here.</h1>
          <h3>An app for those of us who need a little help from our friends.</h3>
        </div>
      </Layout>
    );
  }
}

export default App;
