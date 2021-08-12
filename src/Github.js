import React, { Component } from 'react';
import Profile from './Components/Profile';
import Searcher from './Components/Searcher';


const API = 'https://api.github.com/users/';

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
            notFound: ''
         }
    }

    getProfile(username){
      let finalURL =  `${API}/${username}`;
      fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ 
            username: data.username,
            name: data.name,
            avatar: data.avatar_url,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            homeURL: data.html_url,
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
        <div>
               <section id="card">
                 <Searcher />
                 <Profile />
               </section>
        </div> );
    }
}
 
export default Github;