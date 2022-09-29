import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const PChart = ({ data }) => {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie data={data} outerRadius={80} dataKey="amount">
          {data.map((entry, index) => (
            <Cell strokeWidth={5} key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PChart;
