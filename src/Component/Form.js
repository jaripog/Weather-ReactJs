import React from 'react';

class Form extends React.Component{
    render()
    {
        return(
                <form  onSubmit={this.props.loadWeather}>
                    <input type="text" name="city" placeholder="Enter City..."></input>
                    <input type="text" name="country" placeholder="Enter Country..."></input>
                    <button>Get Weather</button>
                </form>
        );
    }
}

export default Form;