/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { VictoryChart, VictoryGroup, VictoryBar, VictoryStack } from "victory";
import PieThemes from '../pies/PieThemes'
import CustomLabel from '../pies/CustomVictoryLabel'
import { cleanUpDataForPie, cleanUpTestData } from '../../utils/utils'

class TestScores extends Component {
    render(){
        const cleanishData = [
            [
                { x: "average\n 25th", y: 1330 },
                { x: "average\n75th", y: 1400 },
            ],
            [
                { x: "writing\n25th", y: 650 },
                { x: "writing\n75th", y: 700 },
                { x: "writing\naverage", y: 650 }
            ],
            [
                { x: "math\n25th", y: 650 },
                { x: "math\n75th", y: 700 },
                { x: "math\naverage", y: 675 }
            ]]
        // console.log(cleanishData[1].writing)
        return (
            <section className="pies">
                <div className="Pie">
                    helo
                    {/* <VictoryChart domainPadding={{ x: 50 }} width={400} height={400}>
                        <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
                            <VictoryBar key={0} data={cleanishData[0]} style={{ fontSize: 7}}/>
                            <VictoryBar key={1} data={cleanishData[1]} style={{ fontSize: 7}}/>
                            <VictoryBar key={2} data={cleanishData[2]} style={{ fontSize: 7}}/>
                        </VictoryGroup>
                    </VictoryChart> */}
                </div>
            </section>
        )
    }
}

const mapState = state => ({
    testScores: state.school.testScores
})

export default connect( mapState, null)(TestScores)