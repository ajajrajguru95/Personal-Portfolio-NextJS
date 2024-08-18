import { Montserrat } from "next/font/google";
import "./globals.scss";
import Header from "../components/elements/Header";
import Footer from "../components/elements/Footer";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <main className="pt-[15rem]">
          {children}
        </main>
        {/* footer */}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
