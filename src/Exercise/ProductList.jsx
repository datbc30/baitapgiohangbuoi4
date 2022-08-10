import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
//   renderSanPham = () => {
//     return mangSanPham.map((sanPham, index) => {
//       return (
//         <div className="col-4" key={index}>
//           <ProductItem sanPham={sanPham} />
//         </div>
//       );
//     });
//   };

  render() {
    let {gioHang,themGioHang} = this.props;
    return (
      <div className="container">
        <div className="row">
            {gioHang.map((sanPham,index) => {
                return (
                    <div className="col-4" key={index}>
                        <ProductItem themGioHang={themGioHang} sanPham={sanPham}/>
                        {/* <ProductItem themGioHang={themGioHang} sanPham={this.sanPham}/> */}
                    </div>
                )
            })}
        </div>
      </div>
    );
  }
}
