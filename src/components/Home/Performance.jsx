import { PerformanceData } from "../../Data/performanceData";
import "../../styles/performance.css";
const Performance = () => {
  const sqSize = 200;
  const radius = (sqSize - 10) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * 74) / 100;
  return (
    <div className="performance">
      <div className="title">Overall Performance</div>
      <div className="performance-block">
        <div className="p-left">
          {PerformanceData.map((item, ind) => {
            return (
              <div
                className={"performance-item" + " div" + ind}
                key={"performance_item" + ind}
              >
                <div>
                  <div className="performance-img">
                    <img src={item.src} alt={item.title} />
                  </div>
                </div>
                <div>
                  <div className="performance-amount">{item.amount}</div>
                  <div className="performance-title">{item.title}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-right performance-item">
          <div className="progress-circle">
            <svg width="inherit" height="inherit" viewBox={viewBox}>
              <defs>
                <linearGradient
                  id="gradient"
                  x1="10%"
                  y1="30%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="10%" stopColor="var(--darkpink)" />
                  <stop offset="90%" stopColor="var(--darkblue)" />
                </linearGradient>
              </defs>
              <g>
                <circle
                  className="circle-progress"
                  cx={sqSize / 2}
                  cy={sqSize / 2}
                  r={radius}
                  stroke="url(#gradient)"
                  strokeWidth={`${16}px`}
                  transform={`rotate(90 ${sqSize / 2} ${sqSize / 2})`}
                  style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                  }}
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="var(--gray)"
                >
                  Conversion
                </text>
                <text
                  x="50%"
                  y="60%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="var(--gray)"
                >
                  83%
                </text>
              </g>
              <circle
                className="circle-dashes"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${30}px`}
                style={{
                  strokeDasharray: "5 7", // Adjust the spacing here
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
