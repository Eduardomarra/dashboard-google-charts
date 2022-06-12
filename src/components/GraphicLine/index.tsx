import { Chart } from "react-google-charts";

export const data = [
    ["x", "loren", "ipsun"],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
];

export const options = {
    hAxis: {
        title: "Loren",
    },
    vAxis: {
        title: "Ipsun",
    },
    colors: ["#18c024", "#d15646"],

};

export function GraphicLine() {
    return (
        <>
            <Chart
                chartType="LineChart"
                width="350px"
                height="150px"
                data={data}
                options={options}
            />
        </>
    )
}
