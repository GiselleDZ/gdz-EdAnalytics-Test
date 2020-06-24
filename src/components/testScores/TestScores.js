/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { VictoryChart, VictoryGroup, VictoryBar, VictoryTheme } from "victory";
import PieThemes from '../pies/PieThemes'
import { cleanUpTestData } from '../../utils/utils'

class TestScores extends Component {
    render(){
        const {satScores} = this.props

        const fullData = cleanUpTestData(satScores)

        const data= fullData[3]
        return (
            <section className="pies">
                <h4 className="title">SAT Test Scores</h4>
                <div className="barChart">
                    <VictoryChart domainPadding={{ y: 60, x: 60 }} padding={100} height={400} >
                        <VictoryGroup offset={30} style={{ data: { width: 20 }}}  >
                        {data.map((subject, j) => {
                            let label= fullData[j]
                            return <VictoryBar
                                key={j}
                                labels={`${label}`}
                                data={subject}
                                horizontal
                                />
                        })
                        }
                        </VictoryGroup>
                    </VictoryChart>
                </div>
            </section>
        )
    }
}

const mapState = state => ({
    satScores: state.school.satScores
})

export default connect( mapState, null)(TestScores)