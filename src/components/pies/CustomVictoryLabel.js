/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {  VictoryLabel, VictoryTooltip } from "victory";

export default class CustomLabel extends React.Component {
    render() {
        return (
            <g>
            <VictoryLabel {...this.props}/>
            <VictoryTooltip
                {...this.props}
                x={200} y={275}
                orientation="top"
                pointerLength={0}
                cornerRadius={75}
                flyoutWidth={150}
                flyoutHeight={150}
                flyoutStyle={{ fill: "black" }}
                text={({datum}) => datum.y === 1 ? `${datum.x}:\n less than ${datum.y}%` : `${datum.x}:\n ${datum.y}%`}
                style={{ fontSize: 10, fill: "white"}}
            />
            </g>
        );
    }
}

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;