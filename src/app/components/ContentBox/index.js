import Divider from "../Divider";
import "./index.css";

function ContentBox({ children, title, className = "" }) {
  return (
    <div className={`content-box ${className}`}>
      {title && <h3>{title}</h3>}
      <Divider isFancy />
      <div className="content-box__content">{children}</div>
    </div>
  );
}

export default ContentBox;
