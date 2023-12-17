import { Route, Routes } from "react-router-dom";
import BaiTapFormik from "./Components/BaiTapFormik";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<BaiTapFormik />} index />
      </Routes>
    </div>
  );
}

export default App;
