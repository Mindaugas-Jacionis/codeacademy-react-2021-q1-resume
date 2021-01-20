import "./index.css";

function Pill({ children, color, id }) {
  const asignedColor = ["green", "yellow", "redish"].includes(color)
    ? color
    : "grey";

  // uncoment line bellow to see ContentBox error boundary in action
  // throw new Error("Pill is broken now 😭");

  return (
    <div id={id} className={`pill pill--${asignedColor} mr-1 mb-1`}>
      <p>{children}</p>
    </div>
  );
}

export default Pill;
