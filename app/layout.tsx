import type { Metadata } from "next";
import "./globals.css";

import StoreProvider from "./StoreProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/providers/AuthProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Techly Web Store",
  description: "E-Commerce is dedicated to selling electronics",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <StoreProvider>
          <Toaster
            position="bottom-right"
            toastOptions={{
              error: {
                style: {
                  background: "#1a1a19",
                  color: "#f2f1ee",
                  border: "1px solid #ef4444",
                  borderRadius: "12px",
                },
              },
              success: {
                style: {
                  background: "#1a1a19",
                  color: "#f2f1ee",
                  border: "1px solid #ef4444",
                  borderRadius: "12px",
                },
              },
            }}
          />

          <Navbar />

          <main className="my-10 min-h-screen">
            <AuthProvider>{children}</AuthProvider>
          </main>
        </StoreProvider>

        <Footer />
      </body>
    </html>
  );
}
