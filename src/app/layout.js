import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/components/redux/provider";
import { Toaster } from "react-hot-toast";
import SessionProvider from "@/components/SessionProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Daraz - Ecommerce Website ",
  description: "Test Application for Education Purpose.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <SessionProvider>
          <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
          <Header />
          {children}
          <Footer />
          </SessionProvider> 
        </ReduxProvider>
      </body>
    </html>
  );
}
