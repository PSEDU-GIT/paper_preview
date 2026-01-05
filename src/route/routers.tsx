import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App.tsx";
import ProcessScreen from "../process";
import ResultScreen from "../result";
import DefaultLayout from "./DefaultLayout.tsx";

export default function Routers() {
  return (
    <BrowserRouter basename="/preview">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<App />} />
          <Route path="/process" element={<ProcessScreen />} />
          <Route path="/result" element={<ResultScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
