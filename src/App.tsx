import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import AuthLayout from "./components/layout/AuthLayout.tsx";
import Register from "./components/pages/Register.tsx";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors duration={5000} />
      <Router>
        <Routes>
          {/* Regular pages with header/footer */}
          <Route path="/" element={<Layout />}>
            {/* Add home and other pages here as index or nested routes */}
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="shop" element={<Shop />} /> */}
          </Route>

          {/* Auth routes without header/footer */}
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<Register />} />
            {/* Add other auth routes here */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
            {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
