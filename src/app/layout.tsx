import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FarmFuzion - Connect Farmers & Service Providers",
  description:
    "FarmFuzion connects farmers, cooperatives and service providers through one platform",
  icons: {
    icon: "/icons/farmFuzionlogo.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
