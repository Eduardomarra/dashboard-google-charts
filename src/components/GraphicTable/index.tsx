import { Chart } from "react-google-charts";

export const data = [
  ["Name", "Email", "Phone", "Country", "City", "State", "Zip", "Address", "Company", "Industry", "Position", "Salary", "Start Date", "End Date"],
  ["John Lennon", "john@beatles.co.uk", "+44 123456789", "UK", "Liverpool", "Liverpool", "Liverpool", "Liverpool", "Liverpool", "Liverpool", "Manager", "$10000", "01/01/2000", "31/12/2022"],
  ["Paul McCartney", "paul@beatles.co.uk", "+44 123456789", "UK", "Liverpool", "Liverpool", "Liverpool", "Liverpool", "Liverpool", "Liverpool", "Manager", "$10000", "01/01/2000", "31/12/2022"],
  ["George Harrison", "george@beatles.co.uk", "+44 123456789", "UK", "Liverpool", "Liverpool", "Liverpool", "Liverpool", "Liverpool", "Liverpool", "Manager", "$10000", "01/01/2000", "31/12/2022"],
  ["Ringo Starr", "ringo@beatles.co.uk", "+44 123456789", "UK", "Liverpool", "Liverpool", "Liverpool", "Liverpool", "Liverpool", "Liverpool", "Manager", "$10000", "01/01/2000", "31/12/2022"],
];

export const options = {
  allowHtml: true,
  showRowNumber: true,
};

export const formatters = [
  {
    type: "PatternFormat" as const,
    column: [0, 2],
    options: '<a href="mailto:{1}">{0}</a>',
  },
];

export function GraphicTable() {
  return (
    <Chart
      chartType="Table"
      width="1150px"
      height="100px"
      data={data}
      options={options}
      formatters={formatters}
    />
  );
}
