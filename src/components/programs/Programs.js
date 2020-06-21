import React, { Component } from 'react';
import { VictoryPie } from "victory";

class Programs extends Component {
    render(){
        const { programPercentages } = this.props
        const data = []
        Object.entries(programPercentages).forEach((key,index) => {
            if (key[1] !== 0 ){
                data[index] = {x: key[0], y: key[1] * 100}
            }
        })
        return (
            <div className="App">
                <VictoryPie 
                    data= { data } 
                    cornerRadius={({ datum }) => datum.y * 1}
                />
                {/* hello */}
                {/* <div>
                    <span className="label">React Class</span>
                    <PieClass
                    data={filteredPrograms}
                    width={200}
                    height={200}
                    innerRadius={60}
                    outerRadius={100}
                    />
                </div> */}
            </div>
        )
    }
}



export default Programs