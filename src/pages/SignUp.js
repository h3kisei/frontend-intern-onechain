import '../App.css';

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div className="sub-main1">
          <h1>Sign Up</h1>
          <div>
            <input type="text" placeholder="Tên đăng nhập" className="username" />
          </div>
          <div className="password">
            <input type="text" placeholder="Mật khẩu" className="pass" />
          </div>
          <div className="repassword">
            <input type="text" placeholder="Xác nhận mật khẩu" className="pass" />
          </div>
          <button type="button">Đăng ký</button>
      </div>
    </div>
    </div>
  );
}

export default App;
