import { AuthProvider } from "@/contexts/AuthContext";

export default function Provider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
