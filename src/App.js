import './App.css';
import { Component } from 'react'
import FeaturedPark from './FeaturedPark'

class App extends Component {
  constructor (){
    super()
    this.state={
      listOfParks: ["Sunnybrook", "Trinity Bellwoods", "Riverdale", "earlscourt", 'duffrin', 'downsview']
    }
  }

  removeParks = (nameOfParkToRemove) => {
    console.log(nameOfParkToRemove);
    const copyOfParksArray = [...this.state.listOfParks];
    
    const newArray = copyOfParksArray.filter( (anOriginalPark) => {
      return anOriginalPark !== nameOfParkToRemove

    })
    this.setState({
      listOfParks: newArray
    })
    
    // this.setState({
    //   listOfParks: []
    // })
  }

  render(){
    return (
        <div className="App">
            <h1>Toronto Parks! They are cold right now!</h1> 
            {/* <button onClick={this.removeParks}>The hell with parks</button> */}
                
               
                
                {
                  this.state.listOfParks.map( (nameOfPark, index) => {
                    const waitASec = () =>{
                      this.removeParks(nameOfPark)
                    }

                    return (
                        < FeaturedPark 
                          key={index}
                          parkName = {nameOfPark}
                          functionToDestroyParks ={waitASec}
                        />
                    )
                  })
                }

             
                
        </div>
      );
    }
}

export default App;





 {/* // instead of writing them out like below */}
            {/* <FeaturedPark parkName={this.state.listOfParks[2]}/> */}