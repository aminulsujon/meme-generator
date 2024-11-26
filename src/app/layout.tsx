import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Meme Generator",
  "url": "https://free-meme-generator.vercel.app",
  "description": "Create free hilarious memes instantly with our free meme generator. Upload images, add custom text, and download memes in seconds.",
  "publisher": {
    "@type": "Organization",
    "name": "Free Meme Generator",
    "url": "https://free-meme-generator.vercel.app"
  },
  "mainEntityOfPage": "https://free-meme-generator.vercel.app",
  "image": "https://free-meme-generator.vercel.app/meme-generator.jpg",
  "sameAs": [
    "https://www.facebook.com/",
    "https://twitter.com/"
  ]
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Free Meme Generator - Create Memes Online in Seconds!",
  description: "Create hilarious memes instantly with our Free Meme Generator. Upload images, add custom text, and download your memes in seconds. No signup required—start creating now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head> 
        <meta property="og:title" content="Free Meme Generator - Create Memes Online in Seconds!" /> 
        <meta property="og:description" content="Create hilarious memes instantly with our free meme generator. Upload images, add custom text, and download memes in seconds." /> 
        <meta property="og:image" content="https://free-meme-generator.vercel.app/free-meme-generator-online.webp" /> 
        <meta property="og:url" content="https://free-meme-generator.vercel.app/" /> 
        <meta property="og:type" content="website" /> 
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <div className="text-center p-4">
          Developed by: <a target="_blank" href="https://github.com/aminulsujon"><svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default">
              <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
          </svg></a>
        </div>
      </body>
    </html>
  );
}
