import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ExerciseCart extends Component {
  state = {
    sanPhamGioHang: [
      // {
      //   // maSP: 1,
      //   // tenSP: "VinSmart Live",
      //   // giaBan: 5700000,
      //   // hinhAnh: "./img/sp_vivo850.png",
      //   // soLuong: 1,
      // },
    ],
  };

  // lấy dữ liệu tại componenExerciseCart

  themGioHang = (sanPhamChon) => {
    //từ sản  phầm  được  chọn  tạo  ra  sản  phẩm  giỏ  hàng
    let spGioHang = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      giaBan: sanPhamChon.giaBan,
      hinhAnh: sanPhamChon.hinhAnh,
      soLuong: 1,
    };
    // kiểm tra  sản  phầm  chọn  có  trong  giỏ  hàng  chưa

    const gioHangCapNhat = [...this.state.sanPhamGioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      // sản phẩm được click có trong this.stata.sanPhamGioHang
      gioHangCapNhat[index].soLuong += 1;
    } else {
      // sản phâm được click chưa có trong this.statae.sanPhamGioHangioHang
      gioHangCapNhat.push(spGioHang);
    }
    // set state để component render lại
    this.setState({
      sanPhamGioHang: gioHangCapNhat,
    });
  };

  //Đặt sự kiện xoá giỏ hàng tại component chacha
  xoaGioHang = (maSP) => {
    // tìm trong giỏ hàng có chưa maSP thì click xoá
    const gioHangCapNhat = [...this.state.sanPhamGioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      gioHangCapNhat.splice(index, 1);
    }
    /* 
    => cách 2:
    // let gioHangCapNhat = this.state.sanPhamGioHang.filter(sp => sp.maSP !== maSP)
    */
    // cập nhật lại state giỏ hàng và render ra giao diện
    this.setState({
      sanPhamGioHang: gioHangCapNhat,
    });
  };

  //hàm tăng giảm số lượng
  tangGiamSoLuong = (maSP, tangGiam) => {
    //tăng giảm === true : tăng số lượng, false: giảm số lượng
    const gioHangCapNhat = [...this.state.sanPhamGioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    //xử lý tăng giảm
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }

    this.setState({
      sanPhamGioHang: gioHangCapNhat,
    });
  };

  render() {
    let tongSoLuong = this.state.sanPhamGioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);

    return (
      <div className="container">
        <h1 className="text-center">Danh Sách Sản Phẩm</h1>
        <Cart
          tangGiamSoLuong={this.tangGiamSoLuong}
          xoaGioHang={this.xoaGioHang}
          sanPhamGioHang={this.state.sanPhamGioHang}
        />
        <div className="text-end">
          <span
            className="text-danger"
            style={{ cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Giỏ Hàng ( {tongSoLuong} )
          </span>
        </div>
        <ProductList themGioHang={this.themGioHang} gioHang={data} />
      </div>
    );
  }
}
