import MainLayout from "@/components/MainLayout";
import "./globals.css";
import MenuContextProvider from "@/context/MenuContext";

export const metadata = {
  title: "Nextjs Tailwind Sandbox",
  description: "This is a portfolio project for nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
