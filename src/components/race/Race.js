/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { VictoryPie, VictoryTheme } from "victory";
import PieThemes from '../pies/PieThemes'
import CustomLabel from '../pies/CustomVictoryLabel'
import { cleanUpDataForPie } from '../../utils/utils'

class Race extends Component {
    render(){
        const { raceEthnicity } = this.props
        const data = cleanUpDataForPie(raceEthnicity)
        return (
            <section className="pies">
                <h3>Race and Ethnicity</h3>
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
    raceEthnicity: state.school.raceEthnicity
})

export default connect( mapState, null)(Race)