import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

<FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={brands('twitter')} />


function App() {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Lớp</th>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Hồ Huy Hoàng</td>
                        <td>Nam</td>
                        <td>ĐTVT09</td>
                        <th><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Nguyễn Văn A</td>
                        <td>Nam</td>
                        <td>CK1</td>
                        </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Nguyễn Thị B</td>
                        <td>Nữ</td>
                        <td>DM2</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default App;