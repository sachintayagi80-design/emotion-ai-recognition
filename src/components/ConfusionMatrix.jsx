import { confusionMatrixData, emotionLabels } from "../utils/mockEmotionData";

export default function ConfusionMatrix() {
  const maxValue = Math.max(...confusionMatrixData.flat());

  const getStyle = (value) => {
    const intensity = value / maxValue;
    let bgColor, textColor;

    if (intensity < 0.2) { bgColor = "#fee2e2"; textColor = "#b91c1c"; }
    else if (intensity < 0.4) { bgColor = "#ffedd5"; textColor = "#c2410c"; }
    else if (intensity < 0.6) { bgColor = "#fef9c3"; textColor = "#a16207"; }
    else if (intensity < 0.8) { bgColor = "#ecfccb"; textColor = "#4d7c0f"; }
    else { bgColor = "#d1fae5"; textColor = "#047857"; }

    return {
      backgroundColor: bgColor,
      color: textColor,
      width: "100%",
      height: "50px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: "14px"
    };
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "5px" }}>
        <thead>
          <tr>
            <th></th>
            {emotionLabels.map(label => (
              <th key={label} style={{ fontSize: "12px", color: "#64748b", padding: "10px" }}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {confusionMatrixData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th style={{ fontSize: "12px", color: "#64748b", textAlign: "right", paddingRight: "10px" }}>
                {emotionLabels[rowIndex]}
              </th>
              {row.map((value, colIndex) => (
                <td key={colIndex}>
                  <div style={getStyle(value)}>{value}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Metrics Section */}
      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <div style={{ background: "#f8fafc", padding: "15px", borderRadius: "10px", flex: 1 }}>
          <p style={{ margin: 0, color: "#64748b" }}>Overall Accuracy</p>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: "5px 0" }}>82.3%</p>
        </div>
        <div style={{ background: "#f8fafc", padding: "15px", borderRadius: "10px", flex: 1 }}>
          <p style={{ margin: 0, color: "#64748b" }}>Best Performing</p>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#059669", margin: "5px 0" }}>Happy</p>
        </div>
      </div>
    </div>
  );
}