import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "baroread 로그인",
  description: "baroread 계정에 로그인하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
