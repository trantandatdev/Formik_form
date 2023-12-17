import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { validateUser } from "../util/validation";
import TableUser from "./TableUser";
import { useDispatch, useSelector } from "react-redux";
import { getValueUser, updateUser } from "../redux/slice/userSlice";

const BaiTapFormik = () => {
  const { showError } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: "",
      hoTen: "",
      email: "",
      maLoaiNguoiDung: "",
      matKhau: "",
      soDienThoai: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(getValueUser(values));
      resetForm();
    },
    validationSchema: validateUser,
  });
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setValues,
    resetForm,
  } = formik;

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="mb-5 font-bold text-2xl">
        Bài tập dùng formik và yup xử lí form nhập dữ liệu
      </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="id"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Id
              </label>
              <input
                type="text"
                name="id"
                id="id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập id"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.id}
              />
              {errors.id && touched.id ? (
                <p className="text-red-500 text-xs">{errors.id}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="hoTen"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Họ tên
              </label>
              <input
                type="text"
                name="hoTen"
                id="hoTen"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập họ tên"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hoTen}
              />
              {errors.hoTen && touched.hoTen ? (
                <p className="text-red-500 text-xs">{errors.hoTen}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <p className="text-red-500 text-xs">{errors.email}</p>
              ) : null}
            </div>
            <div>
              <label
                for="maLoaiNguoiDung"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Mã loại người dùng
              </label>
              <select
                id="maLoaiNguoiDung"
                name="maLoaiNguoiDung"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.maLoaiNguoiDung}
              >
                <option selected value="">
                  Chọn
                </option>
                <option value="nhân viên">nhân viên</option>
                <option value="trưởng phòng">trưởng phòng</option>
                <option value="giám đốc">giám đốc</option>
              </select>
              {errors.maLoaiNguoiDung && touched.maLoaiNguoiDung ? (
                <p className="text-red-500 text-xs">{errors.maLoaiNguoiDung}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="matKhau"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Mật khẩu
              </label>
              <input
                type="password"
                id="matKhau"
                name="matKhau"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập mật khẩu"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhau}
              />
              {errors.matKhau && touched.matKhau ? (
                <p className="text-red-500 text-xs">{errors.matKhau}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="soDienThoai"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Số điện thoại
              </label>
              <input
                type="text"
                name="soDienThoai"
                id="soDienThoai"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập số điện thoại"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.soDienThoai}
              />
              {errors.soDienThoai && touched.soDienThoai ? (
                <p className="text-red-500 text-xs">{errors.soDienThoai}</p>
              ) : null}
            </div>
            <div>
              <p className="text-red-500 text-xs">{showError}</p>
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-md"
              >
                ADD ME
              </button>
              <button
                onClick={() => {
                  dispatch(updateUser(values));
                  resetForm();
                }}
                type="button"
                className="bg-orange-500 text-white py-2 px-4 rounded-md"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <TableUser setValues={setValues} />
      </div>
    </div>
  );
};

export default BaiTapFormik;
