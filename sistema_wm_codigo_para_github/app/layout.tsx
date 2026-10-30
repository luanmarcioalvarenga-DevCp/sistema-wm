import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VendaFácil — MVP",
  description: "Sistema simples de vendas, clientes e estoque",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}