import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import Auth0Lock from 'auth0-lock';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      idToken: '',
      profile: {}
     };
  }

  static defaultProps = {
    clientID: '1OCNZfc8mHfYEg7UmdOGHHE75heIpLMf',
    domain: 'dev-cpqq0sbz.us.auth0.com'
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID,this.props.domain);
    this.lock.on('authenticated', (authResult) => {
      console.log(authResult);
      this.lock.getProfile(authResult.accessToken,(error,profile) => {
      if(error){
        console.log(error);
        return;
      }

     this.setProfile(authResult.accessToken, profile);
      console.log(profile);
    });
    });

    this.getProfile();
  }

  setProfile(idToken,profile){
    localStorage.setItem('idToken',idToken);
    localStorage.setItem('profile',JSON.stringify(profile));

    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  getProfile(){
    if(localStorage.getItem != null){
      this.setState({
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        console.log(this.state);

      });
    }
  }

  showLock(){
    this.lock.show();
  }

  logout(){
    this.setState({
      idToken: '',
      profile: ''

    }, () => {
      localStorage.removeItem('idToken');
      localStorage.removeItem('profile');
    });
  }

  render() { 
    let gitty;
    if(this.state.idToken){
      gitty =  <Github />
    }else{
      gitty = 'Click on Login to view the github Searcher';
    }

    return ( 
      <div className="App"> 
        
      <Header 
      idToken={this.state.idToken}
      profile={this.state.profile}
      onLogout={this.logout.bind(this)}
      onLogin={this.showLock.bind(this)} />
      {gitty}
      
    </div>
     );
  }
}
 
export default App;
