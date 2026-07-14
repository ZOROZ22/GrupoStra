import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import { StoreProvider } from "./store";
import { SiteLayout } from "./components/layout/SiteLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Quote from "./pages/Quote";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import SegmentPage from "./pages/SegmentPage";
import BrandPage from "./pages/BrandPage";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/loja" element={<Shop />} />
            <Route path="/produto/:slug" element={<ProductPage />} />
            <Route path="/segmento/:id" element={<SegmentPage />} />
            <Route path="/marca/:brand" element={<BrandPage />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cotacao" element={<Quote />} />
            <Route path="/cadastro" element={<Onboarding />} />
            <Route path="/entrar" element={<Login />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route
              path="/favoritos"
              element={<ProtectedRoute><Favorites /></ProtectedRoute>}
            />
            <Route
              path="/painel"
              element={<ProtectedRoute role="cliente"><Dashboard /></ProtectedRoute>}
            />
            <Route
              path="/painel/:tab"
              element={<ProtectedRoute role="cliente"><Dashboard /></ProtectedRoute>}
            />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route
            path="/admin"
            element={<ProtectedRoute role="admin"><Admin /></ProtectedRoute>}
          />
          <Route
            path="/admin/:section"
            element={<ProtectedRoute role="admin"><Admin /></ProtectedRoute>}
          />
        </Routes>
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </StoreProvider>
  );
}
