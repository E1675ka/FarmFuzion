import "./globals.css";
import type { Metadata } from "next";
import localFont from 'next/font/local'

// Primary font - Lexend (for headings, UI)
const lexend = localFont({
  src: [
    {
      path: '../../public/fonts/lexend/Lexend-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-lexend',
  display: 'swap',
})

// Secondary font - Ubuntu (for body text, tagline)
const ubuntu = localFont({
  src: [
    {
      path: '../../public/fonts/ubuntu/Ubuntu-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ubuntu/Ubuntu-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ubuntu/Ubuntu-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ubuntu/Ubuntu-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-ubuntu',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "FarmFuzion - Connect Farmers & Service Providers",
  description: "FarmFuzion connects farmers, cooperatives and service providers through one platform",
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
    <html lang="en" className={`${lexend.variable} ${ubuntu.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}