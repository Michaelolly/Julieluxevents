import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rentals from './pages/Rentals';
import Equipment from './pages/Equipment';
import Gallery from './pages/Gallery';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Settings from './pages/Settings';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-white">
            <Navbar />
            <Routes>
              {/* Public routes */}
              <Route path="/" element={
                <ProtectedRoute requireAuth={false}>
                  <Home />
                </ProtectedRoute>
              } />
              
              {/* Mixed access routes */}
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/gallery" element={<Gallery />} />
              
              {/* Authentication routes */}
              <Route path="/signin" element={
                <ProtectedRoute requireAuth={false}>
                  <SignIn />
                </ProtectedRoute>
              } />

              {/* Protected routes */}
              <Route path="/cart" element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              } />
              <Route path="/checkout" element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } />

              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster position="bottom-right" />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
