import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Abdallah Mohamed",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}