import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/providers/CartProvider";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";
import { Suspense } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "E-Shop",
  description: "Ecommerce app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} text-slate-700 dark:bg-medium`}>
        <Providers>
          <Toaster
            toastOptions={{
              style: {
                background: "rgb(51 65 85)",
                color: "#fff",
              },
            }}
          />
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Suspense fallback="cargando...">
                <NavBar />
                <main className="flex-grow">{children}</main>
              </Suspense>
              <Footer />
            </div>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
