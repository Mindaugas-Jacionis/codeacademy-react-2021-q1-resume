import "./index.css";

function Divider({ isFancy }) {
  const className = isFancy ? "divider--fancy" : "";

  return <hr className={`divider ${className}`} />;
}

export default Divider;
