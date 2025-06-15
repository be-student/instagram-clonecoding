import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './hook/useAuthStore';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';



// Protected route component that checks if user is logged in
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  
  if (!isLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <MainPage />
        </ProtectedRoute>
      } />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
