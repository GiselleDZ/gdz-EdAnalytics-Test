/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { VictoryPie } from "victory";
import PieThemes from '../pies/PieThemes'
import CustomLabel from '../pies/CustomVictoryLabel'
import { cleanUpDataForPie } from '../../utils/utils'
import './programs.css'

class Programs extends Component {
    render(){
        const { programPercentages } = this.props
        const data = cleanUpDataForPie(programPercentages)
        return (
            <section className="pies">
                <div className="Pie">
                    {/* <VictoryPie
                        className= "victory"
                        data= { data }
                        height={200}
                        innerRadius={20}
                        theme={PieThemes}
                        // labels={({datum}) => datum.x + ': ' + datum.y + '%'}
                        labelComponent={
                            <VictoryTooltip
                                flyoutHeight={20}
                                pointerLength={5}
                                pointerWidth={5}
                                text={({datum}) => `${datum.x}: ${datum.y}%`}
                                style={{ fontSize: 8, wordWrap: true }}
                                flyoutStyle={{ stroke: "tomato", strokeWidth: .2}}
                                constrainToVisibleArea
                                />
                            }
                    /> */}
                    <VictoryPie
                        width={400}
                        style={{ labels: { fill: "white" } }}
                        innerRadius={100}
                        labelRadius={200}
                        theme={PieThemes}
                        labelComponent={<CustomLabel />}
                        data={ data }
                    />
                </div>
            </section>
        )
    }
}

const mapState = state => ({
    programPercentages: state.school.programPercentages
})

export default connect( mapState, null)(Programs)