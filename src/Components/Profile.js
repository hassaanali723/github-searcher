import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        let userdata = this.props.userData;
        let following = `${userdata.homeURL}/following`;
        let followers = `${userdata.homeURL}/followers`;
        let repos = `${userdata.homeURL}/repositories`;

        
        if (userdata.notFound === 'Not Found'){
            return(
                <div>
                   { console.log(userdata)}
                    <h2>Hey</h2>
                    <p>Username Not Found</p>
                </div>
            );
        }
        
        else{
        return ( 
            
            <section className="github-profile">
               { console.log(userdata.username)}
                <div className="github-profile-info">
                    <a href={userdata.homeURL} target='_blank' title={userdata.name || userdata.username}>
                        <img src={userdata.avatar}></img></a>
                        <a href={userdata.homeURL} target='_blank' title={userdata.name || userdata.username}><h2>{userdata.name}</h2></a>
                        <h3>{userdata.location}</h3>
                
                </div>

                <div className="github-profile-state">
                    <ul>
                        <li>
                            <a href={followers} target='_blank' title="Number of Followers"><i>{userdata.followers}</i><span>Followers</span></a>
                        </li>
                        <li>
                            <a href={following} target='_blank' title="Number of Following"><i>{userdata.following}</i><span>Following</span></a>
                        </li>
                        <li>
                            <a href={repos} target='_blank' title="Number of Repositories"><i>{userdata.repos}</i><span>Repositories</span></a>
                        </li>
                    </ul>
                </div>
            </section>
         );
    }
}
}
 
export default Profile;