import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "./data/catalog";

export interface CartItem {
  product: Product;
  qty: number;
}

export interface User {
  name: string;
  email: string;
  accountType: string;
  crmStatus: "aprovado" | "pendente" | "rejeitado" | "n/a";
  council?: string;
  role: "cliente" | "admin";
}

interface StoreCtx {
  cart: CartItem[];
  quote: CartItem[];
  favorites: string[];
  user: User | null;
  addToCart: (p: Product, qty?: number) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  addToQuote: (p: Product, qty?: number) => void;
  removeFromQuote: (id: string) => void;
  updateQuoteQty: (id: string, qty: number) => void;
  clearQuote: () => void;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  login: (u: User) => void;
  logout: () => void;
}

const Ctx = createContext<StoreCtx | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem('stra-cart') || '[]'); } catch { return []; }
  });
  const [quote, setQuote] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem('stra-quote') || '[]'); } catch { return []; }
  });
  const [favorites, setFavorites] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('stra-favorites') || '[]'); } catch { return []; }
  });
  const [user, setUser] = useState<User | null>(() => {
    try { return JSON.parse(localStorage.getItem('stra-user') || 'null'); } catch { return null; }
  });

  useEffect(() => { localStorage.setItem('stra-cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem('stra-quote', JSON.stringify(quote)); }, [quote]);
  useEffect(() => { localStorage.setItem('stra-favorites', JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem('stra-user', JSON.stringify(user)); }, [user]);

  const addToCart = (p: Product, qty = 1) =>
    setCart((c) => {
      const ex = c.find((i) => i.product.id === p.id);
      if (ex) return c.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + qty } : i));
      return [...c, { product: p, qty }];
    });

  const removeFromCart = (id: string) => setCart((c) => c.filter((i) => i.product.id !== id));
  const updateQty = (id: string, qty: number) =>
    setCart((c) => c.map((i) => (i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  const clearCart = () => setCart([]);

  const addToQuote = (p: Product, qty = 1) =>
    setQuote((c) => {
      const ex = c.find((i) => i.product.id === p.id);
      if (ex) return c.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + qty } : i));
      return [...c, { product: p, qty }];
    });
  const removeFromQuote = (id: string) => setQuote((c) => c.filter((i) => i.product.id !== id));
  const updateQuoteQty = (id: string, qty: number) =>
    setQuote((c) => c.map((i) => (i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  const clearQuote = () => setQuote([]);

  const toggleFavorite = (id: string) =>
    setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  const isFavorite = (id: string) => favorites.includes(id);

  const login = (u: User) => setUser(u);
  const logout = () => setUser(null);

  return (
    <Ctx.Provider
      value={{ cart, quote, favorites, user, addToCart, removeFromCart, updateQty, clearCart, addToQuote, removeFromQuote, updateQuoteQty, clearQuote, toggleFavorite, isFavorite, login, logout }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore must be used within StoreProvider");
  return c;
}
