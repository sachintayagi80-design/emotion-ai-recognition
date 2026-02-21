import { useState, useEffect, useRef } from "react";

const EMOTIONS = [
  "Happy",
  "Sad",
  "Angry",
  "Surprised",
  "Neutral",
  "Disgusted",
  "Fearful",
];

export default function WebcamCapture() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState(null);
  const [confidence, setConfidence] = useState(0);

  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setIsStreaming(true);
    } catch (err) {
      console.error("Error accessing webcam:", err);
    }
  };

  const stopWebcam = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setIsStreaming(false);
    setCurrentEmotion(null);
    setConfidence(0);
  };

  useEffect(() => {
    let interval;

    if (isStreaming) {
      interval = setInterval(() => {
        const randomEmotion =
          EMOTIONS[Math.floor(Math.random() * EMOTIONS.length)];
        const randomConfidence =
          Math.floor(Math.random() * 30) + 70;

        setCurrentEmotion(randomEmotion);
        setConfidence(randomConfidence);
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isStreaming]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Live Webcam</h2>

      {!isStreaming ? (
        <button onClick={startWebcam}>Start Camera</button>
      ) : (
        <button onClick={stopWebcam}>Stop Camera</button>
      )}

      <div style={{ marginTop: "20px" }}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{ width: "400px", borderRadius: "10px" }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        {currentEmotion ? (
          <>
            <h3>Emotion: {currentEmotion}</h3>
            <p>Confidence: {confidence}%</p>
          </>
        ) : (
          <p>Start camera to detect emotion</p>
        )}
      </div>
    </div>
  );
}