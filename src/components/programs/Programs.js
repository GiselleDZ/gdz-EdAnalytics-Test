/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { VictoryPie, VictoryTheme } from "victory";
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
                <h3>Program Percentages</h3>
                <div className="Pie">
                    <VictoryPie
                        width={400}
                        style={{ labels: { fill: "white" } }}
                        innerRadius={100}
                        labelRadius={200}
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