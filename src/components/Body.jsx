import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

const Body = () => {
  return (
    <main className="text-primary-100  border-secondary-100 border-8 font-body overflow-hidden m-1 relative">
      <Header />
      <Home />
      <Footer />
    </main>
  );
};

export default Body;
