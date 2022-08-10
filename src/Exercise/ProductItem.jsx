import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
      let {sanPham,themGioHang} = this.props;
    return (
        <div className='card'>
        <img src={sanPham.hinhAnh} alt="..." width={300} height={300}/>
        <div className='card-body'>
            <h4>{sanPham.tenSP}$</h4>
            <button className='btn bg-dark text-white'>
                Xem Chi Tiết
            </button>
            <button className='btn bg-dark text-white' onClick={() => themGioHang(sanPham)}>
                Thêm Giỏ Hàng
            </button>
        </div>
  </div>
    );
  }
}
