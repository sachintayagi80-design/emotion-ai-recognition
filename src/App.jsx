import { useState } from "react";
import  WebcamCapture  from "./components/WebcamCapture";
import  EmotionChart  from "./components/EmotionChart";
import  ConfusionMatrix  from "./components/ConfusionMatrix";
import  ModelArchitecture  from "./components/ModelArchitecture";

export default function App() {
  const [activeTab, setActiveTab] = useState("detection");

  const renderContent = () => {
    switch (activeTab) {
      case "detection":
        return <WebcamCapture />;
      case "accuracy":
        return (
          <>
            <h2>Training Accuracy Over Epochs</h2>
            <p>
              Mock training progress showing model accuracy improvement across
              10 epochs
            </p>
            <EmotionChart />
          </>
        );
      case "confusion":
        return (
          <>
            <h2>Confusion Matrix</h2>
            <p>
              7x7 classification matrix showing predicted vs actual emotions
            </p>
            <ConfusionMatrix />
          </>
        );
      case "architecture":
        return (
          <>
            <h2>CNN Model Architecture</h2>
            <p>Deep learning architecture used for emotion classification</p>
            <ModelArchitecture />
          </>
        );
      default:
        return null;
    }
  };
return (
  <div style={{ 
    background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)", 
    minHeight: "100vh", 
    padding: "40px", 
    color: "white",
    fontFamily: "'Poppins', sans-serif" 
  }}>
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <header style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", background: "linear-gradient(to right, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          EmotionAI Analytics
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "18px" }}>Deep Learning Interface • B.Tech Data Science Specialization</p>
      </header>

      {/* Glassmorphism Navigation */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
        {["detection", "accuracy", "confusion", "architecture"].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "12px 24px",
              cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              fontWeight: "600",
              backgroundColor: activeTab === tab ? "rgba(99, 102, 241, 0.2)" : "transparent",
              color: activeTab === tab ? "#c084fc" : "#94a3b8",
              boxShadow: activeTab === tab ? "0 0 15px rgba(168, 85, 247, 0.4)" : "none",
              transition: "all 0.3s ease"
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main Glass Card */}
      <div style={{ 
        backgroundColor: "rgba(30, 41, 59, 0.7)", 
        backdropFilter: "blur(10px)",
        padding: "40px", 
        borderRadius: "24px", 
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" 
      }}>
        {renderContent()}
      </div>
    </div>
  </div>
);
}