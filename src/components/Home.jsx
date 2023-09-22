import Gallery from "./Gallery";
import SearchandUpload from "./SearchandUpload";

const Home = () => {
  return (
    <section className="px-3 sm:px-6 md:px-14 overflow-hidden">
      <SearchandUpload />
      <Gallery />
    </section>
  );
};

export default Home;
