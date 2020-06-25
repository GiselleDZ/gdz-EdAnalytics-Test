import { assign } from "lodash"

const colors = [
    "#7885cb",
    "#6573c3",
    "#5262bc",
    "#3f51b5",
    "#b2b9e1",
    "#9fa8da",
    "#8b96d2",
];
const royal = "#3f51b5";
const lightRoyal = "#5262bc";

// Typography
const sansSerif =
    "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif";
const letterSpacing = "normal";
const fontSize = 14;

// Layout
const baseProps = {
    colorScale: colors
};

  // Labels
const baseLabelStyles = {
    fontFamily: sansSerif,
    fontSize,
    letterSpacing,
    padding: 10,
    fill: royal,
    stroke: "transparent"
};
const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

// Strokes
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Put it all together...
const PieThemes = {
    area: assign(
    {
        style: {
            data: {
            fill: royal
            },
            labels: centeredLabelStyles
            }
        },
        baseProps
        ),
        axis: assign(
        {
            style: {
            axis: {
                fill: "transparent",
                stroke: royal,
                strokeWidth: 1,
                strokeLinecap,
                strokeLinejoin
            },
            axisLabel: assign({}, centeredLabelStyles, {
                padding: 25
            }),
            grid: {
                fill: "none",
                stroke: "none",
                pointerEvents: "painted"
            },
            ticks: {
                fill: "transparent",
                size: 1,
                stroke: "transparent"
            },
            tickLabels: baseLabelStyles
            }
        },
        baseProps
        ),
        bar: assign(
        {
            style: {
            data: {
                fill: royal,
                padding: 8,
                strokeWidth: 0
            },
            labels: baseLabelStyles
            }
        },
        baseProps
        ),
        boxplot: assign(
        {
            style: {
            max: {
                padding: 8,
                stroke: royal,
                strokeWidth: 1
            },
            maxLabels: baseLabelStyles,
            median: {
                padding: 8,
                stroke: royal,
                strokeWidth: 1
            },
            medianLabels: baseLabelStyles,
            min: {
                padding: 8,
                stroke: royal,
                strokeWidth: 1
            },
            minLabels: baseLabelStyles,
            q1: {
                padding: 8,
                fill: lightRoyal
            },
            q1Labels: baseLabelStyles,
            q3: {
                padding: 8,
                fill: lightRoyal
            },
            q3Labels: baseLabelStyles
            },
            boxWidth: 20
        },
        baseProps
        ),
        candlestick: assign(
        {
            style: {
            data: {
                stroke: royal,
                strokeWidth: 1
            },
            labels: centeredLabelStyles
            },
            candleColors: {
            positive: "#ffffff",
            negative: royal
            }
        },
        baseProps
        ),
        chart: baseProps,
        errorbar: assign(
        {
            borderWidth: 8,
            style: {
            data: {
                fill: "transparent",
                stroke: royal,
                strokeWidth: 2
            },
            labels: centeredLabelStyles
            }
        },
        baseProps
        ),
        group: assign(
        {
            colorScale: colors
        },
        baseProps
        ),
        legend: {
        colorScale: colors,
        gutter: 10,
        orientation: "vertical",
        titleOrientation: "top",
        style: {
            data: {
            type: "circle"
            },
            labels: baseLabelStyles,
            title: assign({}, baseLabelStyles, { padding: 5 })
        }
        },
        line: assign(
        {
            style: {
            data: {
                fill: "transparent",
                stroke: royal,
                strokeWidth: 2
            },
            labels: centeredLabelStyles
            }
        },
        baseProps
        ),
        pie: {
        style: {
            data: {
            padding: 10,
            stroke: "transparent",
            strokeWidth: 1
            },
            labels: assign({}, baseLabelStyles, { padding: 20 })
        },
        colorScale: colors,
        width: 400,
        height: 400,
        padding: 50
        },
        scatter: assign(
        {
            style: {
            data: {
                fill: royal,
                stroke: "transparent",
                strokeWidth: 0
            },
            labels: centeredLabelStyles
            }
        },
        baseProps
        ),
        stack: assign(
        {
            colorScale: colors
        },
        baseProps
        ),
        tooltip: {
        style: assign({}, centeredLabelStyles, {
            padding: 5,
            pointerEvents: "none"
        }),
        flyoutStyle: {
            stroke: royal,
            strokeWidth: 1,
            fill: "#f0f0f0",
            pointerEvents: "none"
        },
        cornerRadius: 5,
        pointerLength: 10
        },
        voronoi: assign(
        {
            style: {
            data: {
                fill: "transparent",
                stroke: "transparent",
                strokeWidth: 0
            },
            labels: assign({}, centeredLabelStyles, {
                padding: 5,
                pointerEvents: "none"
            }),
            flyout: {
                stroke: royal,
                strokeWidth: 1,
                fill: "#f0f0f0",
                pointerEvents: "none"
            }
            }
        },
    baseProps
    )
};

export default PieThemes