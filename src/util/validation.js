import * as Yup from "yup";
export const validateUser = Yup.object({
  // nơi chứa các thuộc tính từ initialValues cần validate
  // required giúp kiểm tra dữ liệu rỗng
  id: Yup.string().required("Vui lòng nhập ID"),
  hoTen: Yup.string().required("Vui lòng nhập họ tên"),
  email: Yup.string().email().required("Vui lòng nhập Email"),
  // hàm matches là giúp kiểm tra dữ liệu dựa vào regex: có 2 giá trị truyền vào, thứ nhất là chuỗi regex, thứ 2 là câu thông báo khi dữ liệu không khớp
  soDienThoai: Yup.string()
    .matches(
      /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
      "Vui lòng nhập đúng định dạng sdt"
    )
    .required("Vui lòng không bỏ trống"),
  matKhau: Yup.string()
    .min(6, "Vui lòng nhập tối thiểu 6 ký tự")
    .max(16, "Vui lòng nhập tối đa 16 ký tự")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "Vui lòng nhập mật khẩu bao gồm số và ký tự đặc biệt"
    )
    .required("Vui lòng không bỏ trống"),
  maLoaiNguoiDung: Yup.string().required(
    "Vui lòng không bỏ trống loại người dùng"
  ),
});
