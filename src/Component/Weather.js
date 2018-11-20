import React from 'react';

class Weather extends React.Component{
    render()
    {
        return(
            <div >
                {this.props.city}
                <br/>
                {this.props.country}  
                <br/>              
                {this.props.temperature}
                <br/>
                {this.props.humidity}
                <br/>
                {this.props.description}
                <br/>
                {this.props.error}
                <br/>
            </div>
        );
    }
}

export default Weather;