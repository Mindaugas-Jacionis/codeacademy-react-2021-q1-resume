import "./index.css";

function Pill({ children, color, id }) {
  const asignedColor = ["green", "yellow", "redish"].includes(color)
    ? color
    : "grey";

  return (
    <div id={id} className={`pill pill--${asignedColor} m-1`}>
      <p>{children}</p>
    </div>
  );
}

export default Pill;
