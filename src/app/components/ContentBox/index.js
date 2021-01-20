import ErrorComponent from "./components/ErrorComponent";
import ErrorBoundary from "../ErrorBoundary";
import Divider from "../Divider";

import "./index.css";

function ContentBox({
  children,
  title,
  className = "",
  contentClassName = "",
  language = "en",
}) {
  return (
    <ErrorBoundary component={() => <ErrorComponent language={language} />}>
      <div className={`content-box ${className}`}>
        {title && <h3>{title}</h3>}
        <Divider isFancy />
        <div className={`content-box__content ${contentClassName}`}>
          {children}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default ContentBox;
