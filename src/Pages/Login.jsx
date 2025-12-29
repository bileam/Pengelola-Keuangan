import "../style/login.css";
const Login = () => {
  return (
    <div className="box">
      <form action="" className="">
        <h1 className="text-h1 text-center">
          <span>L</span>
          <span>o</span>
          <span>g</span>
          <span>i</span>
          <span>n</span>
        </h1>
        <input type="text" placeholder="email" className="" />
        <input type="text" placeholder="password" className="" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
