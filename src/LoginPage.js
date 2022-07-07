import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <h1>Login Page</h1>
          <div>
            <input type="text" placeholder="Tên đăng nhập" className="username" />
          </div>
          <div className="password">
            <input type="text" placeholder="Mật khẩu" className="pass" />
          </div>
          <div>
            <p>
              <Link to='/signup'>Forgot Password?</Link>
            </p>
          </div>
          <button type="button">Login</button>
          <div>
            <p>
              <Link to='/signup'>Chưa có tài khoản?</Link>
            </p>
          </div>
      </div>
    </div>
    </div>
  );
}

export default App;
