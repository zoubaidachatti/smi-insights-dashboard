import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const BarsChart = ({ data }) => {
  return (
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 5,
        }}
        barSize={18}
        barGap={30}
      >
        <CartesianGrid
          // verticalPoints={[0, 50, 100, 150, 200]}
          // horizontalPoints={[100, 150, 200, 250]}
          strokeDasharray="0"
        />
        <XAxis
          axisLine={false}
          tickLine={false}
          tick={{ dy: 7 }}
          dataKey="title"
        />
        <Bar
          unit={"KC"}
          radius={[30, 30, 0, 0]}
          dataKey="amount"
          fill="var(--darkpink)"
        >
          <LabelList
            dataKey={"amountstr"}
            position={"top"}
            fontSize={11}
            style={{ fill: "var(--gray)" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarsChart;
