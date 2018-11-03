import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';//use redirect to send people away from the chatroom if they aren't currently logged in, look at Zac's example for help
import Layout from './components/common/Layout/Layout';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
// import Blog from './components/Blog/Blog';
import Help from './components/Help/Help';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import DeleteProfile from './components/DeleteProfile/DeleteProfile';
import Logout from './components/Logout/Logout';
import Signup from './components/Signup/Signup';
import CreatePost from './components/CreatePost/CreatePost';
import ShowPost from './components/ShowPost/ShowPost';
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
    let { currentUser } = this.state;
    let { onAuthSuccess, onLogout } = this;
    return (
      <Layout currentUser={currentUser}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chat" render={(props) => {
            return <Chat {...props}
              currentUser={currentUser} />
              }}/>
          {/* <Route path="/blog" component={Blog} /> */}
          <Route path="/help" component={Help} />
          <Route path="/login" render={(props) => {
            return <Login {...props}
            onLoginSuccess={onAuthSuccess} />
          }} />
          <Route path="/profile" render={(props) => {
            return <Profile {...props}
            currentUser={currentUser}
            onDeleteSuccess={onAuthSuccess} />
          }} />
          <Route path="/editProfile" render={(props) => {
            return <EditProfile {...props}
            onEditSuccess={onAuthSuccess}
            currentUser={currentUser} />
          }} />
          <Route path="/deleteProfile" render={(props) => {
            return <DeleteProfile {...props}
            currentUser={currentUser}
            onLogout={onLogout} />
          }}/>
          <Route path="/logout" render={() => {
            return <Logout onLogout={onLogout}/>
          }} />
          <Route path="/signup" render={(props) => {
            return <Signup {...props}
            onSignupSuccess={onAuthSuccess} />
          }} />
          <Route path="/createPost" render={(props) => {
            return <CreatePost {...props}
            currentUser={currentUser}
            onPostSuccess={onAuthSuccess} />
          }}/>
          <Route path="/showPost/:id" render={(props) => {
            return <ShowPost {...props}
            currentUser={currentUser}/>
          }}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
