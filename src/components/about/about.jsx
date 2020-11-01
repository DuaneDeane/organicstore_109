import React, { Component } from 'react';

class About extends Component {

    state = { 
        emailVisible: false
     };

    render() { 
        return (
            <div className="jumbotron">
                <h1 className="display-4">About</h1>
                <p class="lead">This is the about</p>

                {this.getEmailText()}

                <button onClick={this.onButtonClicked} className="btn btn-primary btn-lg">
                    {this.state.emailVisible ? "Hide email" : "Show email"}
                </button>
             </div>
          );
    }

    getEmailText = () => {
        if(this.state.emailVisible) {
            return (
            <div>
                <a href="mailto:contact@mail.com">contact@mail.com</a>
            </div>
            )
        }

        return (
            <div>
                <label> Click the button to see my email</label>
            </div>
        )
    };

    onButtonClicked = () => {
        this.setState({emailVisible: !this.state.emailVisible})
    };

}
 
export default About;