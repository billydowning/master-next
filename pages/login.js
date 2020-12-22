import Head from "next/Head";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const onLogin = (event) => {
    event.preventDefault();

    router.push("/dashboard");
  };

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
      </Head>
      <div className="ui input">
        <input placeholder="Username" />
        <input placeholder="Password" type="password" />
      </div>
      <button type="button" onClick={onLogin} className="ui red button">
        Login
      </button>
    </div>
  );
};

export default Login;
