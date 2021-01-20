import translations from "../translations";

function Footer({ language }) {
  const { footer } = translations[language];

  // uncoment line bellow to see error boundary around Footer in action
  // throw new Error("Footer crashed 😢");

  return (
    <footer style={{ padding: "20px", background: "var(--color-green)" }}>
      {footer}
    </footer>
  );
}

export default Footer;
