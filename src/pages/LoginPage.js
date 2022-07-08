import '../App.css';
import { Link } from 'react-router-dom';
// import validate from '/utils/validateInfo';

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div className="sub-main1">
          <h1>Login Page</h1>
          <div>
            <input 
            type="text" 
            placeholder="Tên đăng nhập" 
            className="username"></input>
          </div>
          <div className="password">
            <input type="text" placeholder="Mật khẩu" className="password" />
          </div>
          <div>
            <p>
              <Link to='/signup'>Forgot Password?</Link>
            </p>
          </div>
          <button type="button">Đăng nhập</button>
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
