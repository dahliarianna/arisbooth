import youSure from "./assets/youSure.png";
function YouSure({ setStartOver }) {
  return (
    <div className="startOverConfirmation">
      <div className="startOverlay" onClick={() => setStartOver(false)}></div>
    </div>
  );
}

export default YouSure;
