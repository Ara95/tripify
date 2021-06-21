import Header from "../components/HeaderComponent";

const About = () => {
  // page content
  const pageTitle = "Om oss";
  const pageDescription = "Om oss";

  return (
    <div>
      <title>{pageTitle}</title>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  );
};

export default About;
