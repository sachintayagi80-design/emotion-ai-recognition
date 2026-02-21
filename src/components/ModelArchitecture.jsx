import React, { useState } from "react";

const layers = [
  { name: "Input", description: "48x48 grayscale image" },
  { name: "Conv2D (32)", description: "32 filters, 3x3 kernel, ReLU" },
  { name: "MaxPool", description: "2x2 pooling" },
  { name: "Conv2D (64)", description: "64 filters, 3x3 kernel, ReLU" },
  { name: "MaxPool", description: "2x2 pooling" },
  { name: "Flatten", description: "Convert to 1D vector" },
  { name: "Dense", description: "128 units, ReLU, Dropout 0.5" },
  { name: "Output", description: "7 units (emotions), Softmax" },
];

const ModelArchitecture = () => {
  const [openSection, setOpenSection] = useState(null);

  const colors = {
    Input: "#38bdf8",
    Conv2D: "#818cf8",
    MaxPool: "#fbbf24",
    Flatten: "#94a3b8",
    Dense: "#34d399",
    Output: "#f472b6"
  };

  return (
    <div style={{ color: "white" }}>
      <h2 style={{ marginBottom: "25px", color: "#818cf8" }}>Model Flow</h2>
      
      {/* Horizontal Flow Map */}
      <div style={{ 
        display: "flex", 
        gap: "0", 
        overflowX: "auto", 
        padding: "20px 0",
        scrollbarWidth: "none" 
      }}>
        {layers.map((layer, index) => {
          const layerType = layer.name.split(' ')[0];
          const themeColor = colors[layerType] || "#818cf8";

          return (
            <div key={index} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <div style={{
                padding: "20px",
                background: `linear-gradient(145deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))`,
                borderRadius: "16px",
                border: `2px solid ${themeColor}`,
                boxShadow: `0 0 15px ${themeColor}44`,
                minWidth: "140px",
                textAlign: "center"
              }}>
                <div style={{ color: themeColor, fontWeight: "bold", fontSize: "16px" }}>{layer.name}</div>
                <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "5px" }}>{layer.description}</div>
              </div>
              {index < layers.length - 1 && <span style={{ margin: "0 15px", color: "#475569", fontSize: "20px" }}>➜</span>}
            </div>
          );
        })}
      </div>

      {/* Accordion Sections for Details */}
      <div style={{ marginTop: "40px" }}>
        {/* ... (Keep your previous accordion logic here) ... */}
      </div>
    </div>
  );
};

export default ModelArchitecture;