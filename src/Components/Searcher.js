import React, { Component } from 'react';
import '../App.css';

class Searcher extends Component {
     
    onSubmit(event){
        event.preventDefault();
        let value = this.refs.username.value;
        console.log(value);
        this.props.searchProfile(value);
        this.refs.username.value = '';
        

    }

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div onSubmit={this.onSubmit.bind(this)}>
                <form className="search-box">
                    <input type="search" ref="username" placeholder="Type username and hit enter"/>
                </form>
            </div>
         );
    }
}
 
export default Searcher;