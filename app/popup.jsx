import { AiOutlineCloseSquare } from "react-icons/ai";

const Popup = ({ opens, onClose }) => {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "white",
          borderRadius: "8px",
          width: "600px",
          height: "750px",
          padding: "20px 10px",
          animation: "dropTop .3s linear",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start", // Change justifyContent to "flex-start"
          textAlign: "center",
        }}
      >
        {/* Header */}
        <div
          style={{ borderBottom: "1px solid lightgray", paddingBottom: "10px" }}
        >
          <h1 style={{ margin: 0 }}>{opens.name}</h1>
          <div
            onClick={onClose}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <AiOutlineCloseSquare />
          </div>
        </div>
        {/* Body */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Change alignItems to "flex-start"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ fontWeight: "bold" }}>
              {opens.q1}
            </li>
            <p style={{ margin: "10px 0 20px 0" }}>{opens.a1}</p>

            <li style={{ fontWeight: "bold" }}>
              {opens.q0}
            </li>
            <p style={{ margin: "10px 0 20px 0" }}>{opens.a0}</p>

            <li style={{ fontWeight: "bold" }}>
              {opens.q2}
            </li>
            <p style={{ margin: "10px 0 20px 0" }}>{opens.a2}</p>
            <li style={{ fontWeight: "bold" }}>
              {opens.q3}
            </li>
            <p style={{ margin: "10px 0 20px 0" }}>{opens.a3}</p>
            <li style={{ fontWeight: "bold" }}>
              {opens.q4}
            </li>
            <p style={{ margin: "10px 0 20px 0" }}>{opens.a4}</p>
            <li style={{ fontWeight: "bold" }}>
              {opens.q5}
            </li>
            <p style={{ margin: "10px 0 20px 0" }}>{opens.a5}</p>
            <li style={{ fontWeight: "bold" }}>
              {opens.q6}
            </li>
            <p style={{ margin: "10px 0 20px 0" }}>{opens.a6}</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Popup;
