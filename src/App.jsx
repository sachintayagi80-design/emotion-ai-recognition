import { useState } from "react";
import WebcamCapture from "./components/WebcamCapture";
import EmotionChart from "./components/EmotionChart";
import ConfusionMatrix from "./components/ConfusionMatrix";
import ModelArchitecture from "./components/ModelArchitecture";

export default function App() {
  const [activeTab, setActiveTab] = useState("detection");

  const renderContent = () => {
    switch (activeTab) {
      case "detection": return <WebcamCapture />;
      case "accuracy":
        return (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#818cf8", marginBottom: "10px" }}>Training Accuracy Over Epochs</h2>
            <p style={{ color: "#94a3b8", marginBottom: "30px" }}>Mock training progress showing model accuracy improvement across 10 epochs</p>
            <EmotionChart />
          </div>
        );
      case "confusion":
        return (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#818cf8", marginBottom: "10px" }}>Confusion Matrix</h2>
            <p style={{ color: "#94a3b8", marginBottom: "30px" }}>7x7 classification matrix showing predicted vs actual emotions</p>
            <ConfusionMatrix />
          </div>
        );
      case "architecture":
        return (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#818cf8", marginBottom: "10px" }}>CNN Model Architecture</h2>
            <p style={{ color: "#94a3b8", marginBottom: "30px" }}>Deep learning architecture used for emotion classification</p>
            <ModelArchitecture />
          </div>
        );
      default: return null;
    }
  };

  return (
    <div style={{ 
      background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)", 
      minHeight: "100vh", 
      width: "100vw",        // Force full viewport width
      margin: 0,             // Remove all default margins
      padding: "40px 0",     // Spacing at top/bottom
      color: "white",
      fontFamily: "'Poppins', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box" // Prevents horizontal scrollbars
    }}>
      {/* Centered Container that grows to 1200px */}
      <div style={{ width: "90%", maxWidth: "1200px" }}> 
        <header style={{ marginBottom: "50px", textAlign: "center" }}>
          <h1 style={{ 
            fontSize: "48px", 
            fontWeight: "800", 
            margin: "0 0 10px 0",
            background: "linear-gradient(to right, #818cf8, #c084fc)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent" 
          }}>
            EmotionAI Analytics
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "20px", margin: 0 }}>
            Deep Learning Interface • B.Tech Data Science Specialization
          </p>
        </header>

        {/* Navigation - Wider gap and larger buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "40px" }}>
          {["detection", "accuracy", "confusion", "architecture"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "14px 28px",
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: "600",
                backgroundColor: activeTab === tab ? "rgba(99, 102, 241, 0.2)" : "rgba(30, 41, 59, 0.4)",
                color: activeTab === tab ? "#c084fc" : "#94a3b8",
                boxShadow: activeTab === tab ? "0 0 20px rgba(168, 85, 247, 0.3)" : "none",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Main Glass Card - Now expands to full container width */}
        <div style={{ 
          backgroundColor: "rgba(30, 41, 59, 0.6)", 
          backdropFilter: "blur(12px)",
          padding: "50px", 
          borderRadius: "32px", 
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          width: "100%",
          boxSizing: "border-box"
        }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}