import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import AuthLayout from "./components/layout/AuthLayout.tsx";
import Register from "./components/pages/Register.tsx";
import { Toaster } from "sonner";
import Login from "./components/pages/Login.tsx";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors duration={5000} />
      <Router>
        <Routes>
          {/* Regular pages with header/footer */}
          <Route path="/" element={<Layout />}></Route>

          {/* Auth routes without header/footer */}
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
