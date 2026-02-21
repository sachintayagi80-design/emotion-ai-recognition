import { mockAccuracyData } from "../utils/mockEmotionData";

// Changed to a standard arrow function to match 'rafc' style
const EmotionChart = () => {
  const maxAccuracy = Math.max(...mockAccuracyData.map((d) => d.accuracy));
  const width = 800;
  const height = 400;
  const padding = 60;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const getX = (epoch) => padding + (epoch / 9) * chartWidth;
  const getY = (accuracy) =>
    height - padding - (accuracy / maxAccuracy) * chartHeight;

  const points = mockAccuracyData
    .map((d) => `${getX(d.epoch)},${getY(d.accuracy)}`)
    .join(" ");

  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        <svg width={width} height={height}>
          {[0, 0.2, 0.4, 0.6, 0.8, 1].map((ratio) => (
            <g key={ratio}>
              <line
                x1={padding}
                y1={height - padding - ratio * chartHeight}
                x2={width - padding}
                y2={height - padding - ratio * chartHeight}
                stroke="#e2e8f0"
                strokeWidth={1}
              />
              <text
                x={padding - 10}
                y={height - padding - ratio * chartHeight + 4}
                textAnchor="end"
                fontSize="12"
              >
                {(ratio * 100).toFixed(0)}%
              </text>
            </g>
          ))}

          {mockAccuracyData.map((d) => (
            <text
              key={d.epoch}
              x={getX(d.epoch)}
              y={height - padding + 20}
              textAnchor="middle"
              fontSize="12"
            >
              {d.epoch}
            </text>
          ))}

          <text
            x={width / 2}
            y={height - 10}
            textAnchor="middle"
            fontSize="14"
          >
            Epoch
          </text>

          <text
            x={15}
            y={height / 2}
            textAnchor="middle"
            fontSize="14"
            transform={`rotate(-90, 15, ${height / 2})`}
          >
            Accuracy
          </text>

          <polygon
            points={`${padding},${height - padding} ${points} ${
              width - padding
            },${height - padding}`}
            fill="rgba(99, 102, 241, 0.1)"
          />

          <polyline
            points={points}
            fill="none"
            stroke="#6366f1"
            strokeWidth={3}
          />

          {mockAccuracyData.map((d) => (
            <circle
              key={d.epoch}
              cx={getX(d.epoch)}
              cy={getY(d.accuracy)}
              r={5}
              fill="#6366f1"
            />
          ))}
        </svg>

        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Final Accuracy:</strong>{" "}
            {(mockAccuracyData[mockAccuracyData.length - 1].accuracy * 100).toFixed(1)}%
          </p>
          <p>
            <strong>Total Epochs:</strong> 10
          </p>
          <p>
            <strong>Dataset:</strong> FER2013
          </p>
        </div>
      </div>
    </div>
  );
};

// This matches: import EmotionChart from "./components/EmotionChart";
export default EmotionChart;