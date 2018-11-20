import React from 'react';
import Titles from './Component/Title';
import Form from './Component/Form';
import Weather from './Component/Weather';

  
const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";


class App extends React.Component{
  constructor()
  {
    super();
    this.state = {
      temperature:null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: null,
    };   
  }

  getWeather = async(e) => {
    console.log('comming in');
    
     const cityName = e.target.city.value;
     const countryName = e.target.country.value;
     e.preventDefault(); 
    console.log(e.target.city);
    const Api_Url =await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${Api_Key}`);
    const Api_result =await Api_Url.json();
    console.log(Api_Url);
    try{
    if(cityName && countryName){
      this.setState({
        temperature: Api_result.main.temp,
        city: Api_result.name,
        country: Api_result.sys.country,
        humidity: Api_result.main.humidity,
        description: Api_result.weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        error: "Please input search values..."
      })
    }
  }
  catch{
    this.setState({
      error: "invalid Inputs"
    });
  }
  }
  render()
  {
    return(
      <div>
      <div className="wrapper">
       <div className="main">
         <div className="container">
           <div className="row">
             <div className="col-xs-5 title-container">
             <Titles />
             </div>
             <div className="col-xs-7 form-container">
             <Form loadWeather={this.getWeather} />
               <Weather
                 temperature={this.state.temperature}
                 city={this.state.city}
                 country={this.state.country}
                 humidity={this.state.humidity}
                 description={this.state.description}
                 error={this.state.error}
               />
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>

    );
  }
}

export default App;