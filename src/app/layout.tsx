import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <Container>{children}</Container>
      </body>
    </html>
  );
}
