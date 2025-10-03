import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

export const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const space = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700']
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${space.className} ${space.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
