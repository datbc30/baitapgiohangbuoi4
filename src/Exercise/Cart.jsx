import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { sanPhamGioHang,xoaGioHang,tangGiamSoLuong } = this.props;

    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{width:'800px'}}>
              <div className="modal-header">
                <h5 className="modal-title">Giỏ Hàng</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <td>Mã SP</td>
                      <td>Hình Ảnh</td>
                      <td>Tên SP</td>
                      <td>Số lượng</td>
                      <td>Đơn Giá</td>
                      <td>Thành Tiền </td>
                      <td>
                        {/* <button className="btn btn-success text-white">Xoá</button> */}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {sanPhamGioHang.map((spGH,index) => {
                      return <tr key={index}>
                        <td>{spGH.maSP}</td>
                        <td><img src={spGH.hinhAnh} alt="..." width={50}></img></td>
                        <td>{spGH.tenSP}</td>
                        <td>
                          <button className="btn btn-success" onClick={() => tangGiamSoLuong(spGH.maSP,true)}>+</button>
                          {spGH.soLuong}
                          <button className="btn btn-success" onClick={() => tangGiamSoLuong(spGH.maSP,false)}>-</button>
                          </td>
                        <td>{spGH.giaBan}</td>
                        <td>{spGH.soLuong * spGH.giaBan}</td>
                        <td>
                          <button className="btn btn-danger text-white" onClick={() => xoaGioHang(spGH.maSP)}>Xoá</button>
                        </td>
                      </tr>
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <td>Tính Tiền</td>
                      {/* <td>{
                         this.props.sanPhamGioHang.reduce((tinhTong,spGioHang,index) => {
                           return tinhTong += spGioHang.soLuong * spGioHang.giaBan
                         })
                        }</td> */}
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
