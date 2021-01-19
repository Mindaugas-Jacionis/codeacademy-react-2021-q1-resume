import "./index.css";

function Divider({ isShort, isFancy, className }) {
  const classes = [
    isFancy ? "divider--fancy" : "",
    isShort ? "divider--short" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <hr className={`divider ${classes}`} />;
}

export default Divider;
