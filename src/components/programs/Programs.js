/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { VictoryPie, VictoryTheme } from "victory";
import PieThemeVariant from '../pies/PieThemeVariant'
import CustomLabel from '../pies/CustomVictoryLabel'
import { cleanUpDataForPie } from '../../utils/utils'
import './programs.css'

class Programs extends Component {
    render(){
        const { programPercentages } = this.props
        const data = cleanUpDataForPie(programPercentages)
        return (
            <section className="pies">
                <h4 className="title">Program Percentages</h4>
                <VictoryPie
                        theme={PieThemeVariant}
                        width={400}
                        style={{ labels: { fill: "white" } }}
                        innerRadius={100}
                        labelRadius={200}
                        labelComponent={<CustomLabel />}
                        data={ data }
                    />
            </section>
        )
    }
}

const mapState = state => ({
    programPercentages: state.school.programPercentages
})

export default connect( mapState, null)(Programs)