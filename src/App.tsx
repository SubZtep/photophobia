import Webcam from "react-webcam"

function App() {
  return (
    <>
      <div style={{ height: "100vh", width: "100%", filter: "invert(1)" }}>
        <Webcam
          videoConstraints={{ facingMode: "environment" }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </>
  )
}

export default App
