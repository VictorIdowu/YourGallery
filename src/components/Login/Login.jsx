import LoginForm from "./LoginForm";
import img from "../../imgs/login.jpg";
const Login = (props) => {
  return (
    <main className="text-secondary-100 absolute top-3 left-3 right-3 bottom-3 border-secondary-100 border-8 font-body overflow-hidden m-1">
      <h2 className="fixed top-10 left-1/2 -translate-x-1/2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold bg-transparent z-50">
        YoUr-GalLErY.CO
      </h2>
      <aside className="w-full h-full relative">
        <LoginForm login={props.login} />

        <img
          src={img}
          alt="background image"
          className="absolute h-full w-full top-0 left-0 right-0 bottom-0 object-cover brightness-75"
        />
      </aside>
    </main>
  );
};

export default Login;
