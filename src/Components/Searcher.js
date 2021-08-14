import React, { Component } from 'react';

class Searcher extends Component {
     
    onSubmit(event){
        event.preventDefault();
        let value = this.refs.username.value;
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
                    <lable><input type="search" ref="username" placeholder="type username and hit enter"/></lable>
                </form>
            </div>
         );
    }
}
 
export default Searcher;