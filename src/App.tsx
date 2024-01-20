import Webcam from "react-webcam"

const { innerWidth: width, innerHeight: height } = window

function App() {
  return (
    <Webcam
      videoConstraints={{ facingMode: "environment" }}
      width={width}
      height={height}
      style={{ filter: "invert(1)" }}
      disablePictureInPicture={true}
    />
  )
}

export default App
