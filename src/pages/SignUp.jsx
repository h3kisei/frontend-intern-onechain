import '../App.css';
import { Input } from '@chakra-ui/react'

function App() {
  return (
    <div className="signup-main">
      <div className="sub-main">
        <div className="sub-main1">
          <h1>Sign Up</h1>
          <div>
            <Input type="text" placeholder="Tên đăng nhập" className="username" />
          </div>
          <div className="password">
            <Input type="text" placeholder="Mật khẩu" className="pass" />
          </div>
          <div className="repassword">
            <Input type="text" placeholder="Xác nhận mật khẩu" className="pass" />
          </div>
          <button type="button">Đăng ký</button>
      </div>
    </div>
    </div>
  );
}

export default App;
