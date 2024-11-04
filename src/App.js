import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";

// Layout component untuk mengelola header dan layout umum
const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header hideLinks={isAuthPage} />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

// AppRoutes component untuk mengelola routing
const AppRoutes = () => {
  const location = useLocation();

  // Cek apakah user sudah login
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect ke login jika belum authenticated
  if (
    !isAuthenticated &&
    !["/login", "/register"].includes(location.pathname)
  ) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Redirect ke homepage jika sudah authenticated tapi mencoba akses login/register
  if (isAuthenticated && ["/login", "/register"].includes(location.pathname)) {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Catch all route - 404 */}
      <Route
        path="*"
        element={
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-gray-600 mb-8">Page not found</p>
            <button
              onClick={() => window.history.back()}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        }
      />
    </Routes>
  );
};

// App component
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
