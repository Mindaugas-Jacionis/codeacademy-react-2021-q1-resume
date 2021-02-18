import { Divider } from "@codeacademy/storybook-components";

import ErrorComponent from "./components/ErrorComponent";
import ErrorBoundary from "../ErrorBoundary";

import "./index.css";

function ContentBox({
  children,
  title,
  className,
  contentClassName,
  language,
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

ContentBox.displayName = "Content";

ContentBox.defaultProps = {
  language: "lt",
  className: "",
  contentClassName: "",
};

export default ContentBox;
