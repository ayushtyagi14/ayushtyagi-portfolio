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
            <head>
                <title>Ayush Tyagi | Web Developer</title>
                <meta
                    name="description"
                    content="Portfolio of Ayush Tyagi — a frontend-focused web developer specializing in Next.js, React, and modern UI/UX. Passionate about building fast, responsive, and impactful digital experiences for global clients."
                />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="Ayush Tyagi, Web Developer, Frontend Developer, Next.js Developer, React Developer, JavaScript, Portfolio, Developer Delhi, Freelance Web Developer"
                />
            </head>
            <body className={`${space.className} ${space.variable} antialiased`}>
                {children}
            </body>
        </html>

    );
}
