import translations from "../translations";

function Footer({ language }) {
  const { footer } = translations[language];

  return (
    <footer style={{ padding: "20px", background: "var(--color-green)" }}>
      {footer}
    </footer>
  );
}

export default Footer;
