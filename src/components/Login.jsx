import { GoogleOutlined } from "@ant-design/icons";
import { signInWithGoogle } from "../firebase";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Distro Community</h2>
        <div className="login-button google" onClick={signInWithGoogle}>
          <GoogleOutlined /> Sign In with Google
        </div>
      </div>
    </div>
  );
};
export default Login;
