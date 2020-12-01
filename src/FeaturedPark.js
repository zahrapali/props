import { Component } from 'react'

class FeaturedParks extends Component{
    render(){
        console.log(this.props);
        
        return(
            <div>
                <h2>This weeks featured park is {this.props.parkName}</h2>
                <button onClick={this.props.functionToDestroyParks}>nonononon i hate this park</button>
            </div>
        )
    }
}

export default FeaturedParks;