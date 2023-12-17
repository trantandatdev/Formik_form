// câu lệnh tạo một cấu trúc slice nhanh : rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrUser: [],
  showError: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getValueUser: (state, action) => {
      console.log(state);
      console.log(action);
      const user = state.arrUser.find((item) => {
        return item.id == action.payload.id;
      });
      if (!user) {
        state.arrUser.push(action.payload);
        state.showError = "";
      } else {
        state.showError = "Đã có người dùng trong dữ liệu";
      }
    },
    removeUser: (state, action) => {
      console.log(action);
      const index = state.arrUser.findIndex((item) => {
        return item.id == action.payload;
      });
      if (index != -1) {
        state.arrUser.splice(index, 1);
      }
    },
    updateUser: (state, action) => {
      console.log(action);
      const index = state.arrUser.findIndex((item) => {
        return item.id == action.payload.id;
      });
      if (index != -1) {
        state.arrUser[index] = action.payload;
      }
    },
  },
});

export const { getValueUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
