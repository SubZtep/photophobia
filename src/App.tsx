import Webcam from "react-webcam"
// import useWindowDimensions from "./hooks/window-dimensions";
import { useEffect } from "react";

const { innerWidth: width, innerHeight: height } = window

function App() {
  // const { height, width } = useWindowDimensions();

  useEffect(() => {
    // @ts-ignore
    screen.orientation.lock("any")
  }, [])
  
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
