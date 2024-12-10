import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

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
  "image": "https://free-meme-generator.vercel.app/free-meme-generator-online.webp",
  "sameAs": [
    "https://www.facebook.com/",
    "https://twitter.com/"
  ],
  "offers": {
    "@type": "Offer",
    "url": "https://free-meme-generator.vercel.app",
    "priceCurrency": "USD",
    "price": "0.00",
    "priceValidUntil": "2025-12-31",
    "eligibleRegion": {
      "@type": "Place",
      "name": "Worldwide"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "268"
  },
  "applicationCategory": "Utility",
  "operatingSystem": "All"
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
      <GoogleAnalytics gaId="G-5J4VFGM9ZG" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <div className="p-4 bg-gray-200">

        <p>A <strong>free meme generator</strong> is an online tool or application that allows users to create memes for free. Memes are typically humorous images, videos, or text that spread rapidly on the internet. Meme generators provide an easy-to-use interface where users can upload images, add text, and customize their memes. These generators are popular because they enable anyone—whether a casual user or a professional—to create and share memes quickly and easily.</p>

        <h2 className="font-bold my-4">Key Features of a Free Meme Generator:</h2>
        <ol>
          <li><strong>Image Upload</strong>: Users can upload their own images (such as photos or artwork) or choose from a library of pre-existing templates.</li>
          <li><strong>Text Customization</strong>: The ability to add custom text to the image, which is often placed in the top and bottom sections of the meme.</li>
          <li><strong>Font Styles</strong>: Users can change the font, size, color, and alignment of the text to match the style they want for their meme.</li>
          <li><strong>Editing Tools</strong>: Basic tools like resizing, cropping, rotating, and adjusting image opacity.</li>
          <li><strong>Download or Share</strong>: After creating a meme, users can download the image or share it directly on social media platforms.</li>
          <li><strong>Templates</strong>: Many meme generators come with a collection of popular meme templates, such as Distracted Boyfriend, Drake Hotline Bling, and Mocking SpongeBob.</li>
          <li><strong>No Watermarks</strong>: Many free meme generators allow users to create and download memes without any watermarks or branding, though some do offer premium options.</li>
        </ol>

        <h2 className="font-bold my-4">Benefits of Using a Free Meme Generator:</h2>
        <ul>
          <li><strong>Ease of Use</strong>: No need for advanced photo editing skills. Just upload, edit, and create.</li>
          <li><strong>Accessibility</strong>: Many meme generators are available directly in your web browser, so you don't need to install any software.</li>
          <li><strong>Speed</strong>: You can create and share memes in just a few minutes.</li>
          <li><strong>Cost-effective</strong>: Completely free to use, which makes it accessible to anyone with an internet connection.</li>
          <li><strong>Fun and Creative</strong>: It's a fun way to share humor and engage with internet culture.</li>
        </ul>

        <h2 className="font-bold my-4">Popular Free Meme Generators:</h2>
        <ul>
          <li><strong>Imgflip Meme Generator</strong>: Allows you to create memes using a variety of templates or your own images.</li>
          <li><strong>Kapwing Meme Generator</strong>: Offers meme templates, easy editing, and the ability to add audio or video.</li>
          <li><strong>Meme Generator (by MemeGenerator.net)</strong>: One of the most well-known meme generators with a large collection of templates.</li>
          <li><strong>Canva</strong>: While not solely for memes, Canva offers meme templates and easy-to-use design tools to create memes and other types of content.</li>
        </ul>

        <h2 className="font-bold my-4">Example Use Case:</h2>
        <p>Imagine you want to create a meme with the Distracted Boyfriend template. You could:</p>
        <ol>
          <li>Select the template from the meme generator's library.</li>
          <li>Add your own captions to the boyfriend, girlfriend, and other woman in the image.</li>
          <li>Download and share the finished meme on social media or with friends.</li>
        </ol>

        <p>In summary, a <strong>free meme generator</strong> is a simple, accessible tool that allows users to create memes with little to no effort. Whether you're just having fun or need a quick laugh for social media, meme generators make the process easy and fast.</p>

        </div>
        <div className="px-4 py-20 pt-4 bg-gray-300 flex flex-col items-center">
          Powered By
          <a target="_blank" href="https://github.com/aminulsujon/meme-generator">
            <svg className="inline octicon octicon-mark-github v-align-middle color-fg-default" height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true">
              <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
          </svg><span className="hidden">GitHub</span></a>
        </div>
      </body>
    </html>
  );
}
