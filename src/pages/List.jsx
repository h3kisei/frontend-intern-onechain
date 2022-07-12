import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


function App() {
    return (
        <div>
        <table class="table table-striped table-hover">
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
      <th><FontAwesomeIcon icon={faPenToSquare} /></th>
                                <th><FontAwesomeIcon icon={faAddressCard} /></th>
        <td><button
        type="button"
        className="btn btn-sm btn-primary waves-effect waves-light"
        // data-toggle="tooltip"
        // data-placement="top"
        // tittle=""
        // data-original-tittle="Remove item"
        // onClick={ () => this.onDelete(item.product) } 
        >
        x
        </button>
        </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Nguyễn Văn A</td>
      <td>Nam</td>
      <td>CK1</td>
      <th><FontAwesomeIcon icon={faPenToSquare} /></th>
                                <th><FontAwesomeIcon icon={faAddressCard} /></th>
                            
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Nguyễn Thị B</td>
      <td>Nữ</td>
      <td>DM2</td>
      <th><FontAwesomeIcon icon={faPenToSquare} /></th>
                                <th><FontAwesomeIcon icon={faAddressCard} /></th>
                                
    </tr>
  </tbody>
</table>
        </div>

    );
}
 
// onDelete(product){
//     console.log(product);
//     var { onDeleteProductInCart } = this.props;
//     onDeleteProductInCart(product);
// }

export default App;