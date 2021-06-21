import Header from "../components/HeaderComponent";

const Contact = () => {
  // page content
  const pageTitle = "Kontakt";
  const pageDescription = "Kontakta oss";

  return (
    <div>
      <title>{pageTitle}</title>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  );
};

export default Contact;
