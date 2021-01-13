import translations from "../translations";

function Footer({ lang }) {
  const { footer } = translations[lang];

  return (
    <footer style={{ padding: "20px", background: "green" }}>{footer}</footer>
  );
}

export default Footer;
