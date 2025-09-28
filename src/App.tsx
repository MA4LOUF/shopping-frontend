import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import AuthLayout from "./components/layout/AuthLayout.tsx";
import Register from "./components/pages/Register.tsx";
import Login from "./components/pages/Login.tsx";
import ProtectedRoute from "./components/routes/ProtectedRoute.tsx";
import { Toaster } from "sonner";
import PageNotFound from "./components/pages/PageNotFound.tsx";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors duration={5000} />
      <Router>
        <Routes>
          {/* Auth routes without header/footer */}
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* All other routes are protected */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />} />
            <Route path="home" index element={<Layout />} />
            {/* Add more protected routes here */}
          </Route>

          {/* Catch-all redirect */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
