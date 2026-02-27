import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "マリンバ株式会社 | MARIMBA Inc.",
  description:
    "問いをカタチに、カタチを価値に。コンサルティング＆デザインで、ヘルスケアとライフスタイル領域の課題を解決します。",
  openGraph: {
    title: "マリンバ株式会社 | MARIMBA Inc.",
    description:
      "問いをカタチに、カタチを価値に。コンサルティング＆デザインで、ヘルスケアとライフスタイル領域の課題を解決します。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}
