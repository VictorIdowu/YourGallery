import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const Body = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.logedIn) navigate("/login");
  });

  return (
    <main className="text-primary-100  border-secondary-100 border-8 font-body overflow-hidden m-1 relative">
      <Header logOut={props.logOut} />
      <Home />
      <Footer />
    </main>
  );
};

export default Body;
