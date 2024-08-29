import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider  from "@/components/CartProvider";
import { Toaster } from "@/components/ui/toaster";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    // weight: ["300", "400", "500", "600", "700"],
    variable: "--font-noto-sans-jp",
});

export const metadata = {
    title: "HAL STORE",
    description: "勉強用に制作したダミーのECサイトです。",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <body className={`${notoSansJP.variable} antialiased`}>
                <CartProvider>
                    <Header />
                    {children}
                    <Toaster />
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
