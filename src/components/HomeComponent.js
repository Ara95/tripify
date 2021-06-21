import Header from "../components/HeaderComponent";

const Home = () => {
  // page content
  const pageTitle = "Home";
  const pageDescription = "Välkommen till Tripify!";

  return (
    <div>
      <title>{pageTitle}</title>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  );
};

export default Home;
