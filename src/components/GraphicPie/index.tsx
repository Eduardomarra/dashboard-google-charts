import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};

export function GraphicPie() {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"350px"}
            height={"150px"}
        />
    )
}
