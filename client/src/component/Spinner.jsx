import { useState, CSSProperties } from "react";
import RingLoader from "react-spinners/RingLoader";

function Spinner({ loading }) {
  // let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("green");

  return (
    <div
      className="sweet-loading"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <RingLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
