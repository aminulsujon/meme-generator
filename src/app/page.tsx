"use client"
import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const memeRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining to avoid runtime errors
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const downloadMeme = () => {
    if (memeRef.current) {
      toPng(memeRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "meme.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => console.error("Error downloading meme:", err));
    }
  };

  return (
  <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Free Meme Generator</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-6 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer"
      />
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      {image && (
        <div
          ref={memeRef}
          className="relative w-[300px] h-auto overflow-hidden rounded-lg shadow-lg"
        >
          <img src={image} alt="Meme" className="w-full h-auto rounded-lg" />
          <div className="absolute top-4 left-0 w-full text-center text-white text-xl font-bold drop-shadow-md">
            {topText}
          </div>
          <div className="absolute bottom-4 left-0 w-full text-center text-white text-xl font-bold drop-shadow-md">
            {bottomText}
          </div>
        </div>
      )}
      {image && (
        <button
          onClick={downloadMeme}
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Download Meme
        </button>
      )}
    </div>
  </>
  );
}