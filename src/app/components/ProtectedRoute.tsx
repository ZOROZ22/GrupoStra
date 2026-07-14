import { Navigate, useLocation } from "react-router";
import { ReactNode } from "react";
import { useStore } from "../store";

export function ProtectedRoute({ children, role }: { children: ReactNode; role?: "cliente" | "admin" }) {
  const { user } = useStore();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/entrar" state={{ from: location.pathname }} replace />;
  }
  if (role && user.role !== role) {
    // logado, mas sem permissão para esta área
    return <Navigate to={user.role === "admin" ? "/admin" : "/painel"} replace />;
  }
  return <>{children}</>;
}
