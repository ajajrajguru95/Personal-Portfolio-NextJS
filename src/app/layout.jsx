import { Montserrat } from "next/font/google";
import "./globals.scss";
import Header from "../components/elements/Header";
import Footer from "../components/elements/Footer";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Ajaj Rajguru | Frontend Developer",
    template: "%s | Ajaj Rajguru"
  },
  description: "Experienced Frontend Developer specializing in React, Next.js, Wordpress and modern web technologies. View my portfolio and projects.",
  keywords: ["Frontend Developer", "React", "Next.js", "Wordpress", "Web Development", "Ajaj Rajguru"],
  authors: [{ name: "Ajaj Rajguru" }],
  creator: "Ajaj Rajguru",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ajaj-rajguru.vercel.app",
    site_name: "Ajaj Rajguru Portfolio",
    title: "Ajaj Rajguru | Frontend Developer",
    description: "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. View my portfolio and projects.",
    images: [
      {
        url: "https://www.your-portfolio-url.com/android-chrome-384x384.png",
        width: 1200,
        height: 630,
        alt: "Ajaj Rajguru - Frontend Developer",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Ajaj Rajguru | Frontend Developer",
  //   description: "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. View my portfolio and projects.",
  //   images: ["https://www.your-portfolio-url.com/twitter-image.jpg"],
  //   creator: "@your_twitter_handle",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Site Header */}
          <Header />
          <main className="pt-12">
            {children}
          </main>
          {/* footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
