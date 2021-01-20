import translations from "../../../translations";

function ErrorComponent({ language }) {
  return (
    <div className="content-box">
      <p>{translations[language].errors.genericContent}</p>
    </div>
  );
}

export default ErrorComponent;
