import React, { Component } from 'react';
import Profile from './Components/Profile';
import Searcher from './Components/Searcher';
import './App.css';


const API = 'https://api.github.com/users';

class Github extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: 'hassaanali723',
            name: '',
            avatar: '',
            repos: '',
            followers: '',
            following: '',
            homeURL: '',
            location: '',
            notFound: ''
         }
    }

    getProfile(username){
      let finalURL =  `${API}/${username}`;
      fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ 
            username: data.login,
            name: data.name,
            avatar: data.avatar_url,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            homeURL: data.html_url,
            location: data.location,
            notFound: data.message
         })
    })
    .catch((error) => console.log('There was a problem in fetching data'))
      }

    componentDidMount(){
      this.getProfile(this.state.username)
    }

    render() { 
        return ( 
        <div className="main">
               <section id="card">
               <h2>Welcome to GitHub Searcher</h2>
                 <Searcher searchProfile={this.getProfile.bind(this)} />
                 <Profile userData={this.state} />
               </section>
        </div> );
    }
}
 
export default Github;