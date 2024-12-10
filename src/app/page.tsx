"use client"
import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import Image from "next/image";


export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [topText, setTopText] = useState("");
  const [topColor, setTopColor] = useState("");
  const [topBG, setTopBG] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [bottomColor, setbottomColor] = useState("");
  const [bottomBG, setBottomBG] = useState("");
  const [topFont, setTopFont] = useState("");
  const [bottomFont, setBottomFont] = useState("");
  const memeRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
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

  // State to track positions of items
  const [items, setItems] = useState([
    { id: 1, x: 50, y: 50 },
    { id: 2, x: 200, y: 200 },
    { id: 3, x: 250, y: 250 },
  ]);

  // Function to handle dragging start
  const handleDragStart = (ev: { dataTransfer: { setData: (arg0: string, arg1: any) => void; }; }, id: any) => {
    ev.dataTransfer.setData("id", id);
  };

  // Function to handle dropping
  const handleDrop = (ev: { dataTransfer: { getData: (arg0: string) => string; }; clientX: any; clientY: any; }) => {
    const id = parseInt(ev.dataTransfer.getData("id"), 10);
    const x = ev.clientX - 100;
    const y = ev.clientY - 100;
    console.log(x,y)
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              x: x, // Offset for centering
              y: y,
            }
          : item
      )
    );
  };
  const themes = [
    "cartoon-happy-funny-face-open-mouth-yellow-background-vibrant-d-cartoon-character-happy-funny-face.png",
    "cat-looking-meme-free-meme-generator.jpg",
    "funny-monkey-meme-generator.png",
    "cat-salfy-meme-generator-online.jpg",
    "funny-monkey-meme-generator-free.jpg",
    "funny-dog-meme-generator.jpg",
    "cat-shout-meme-generator.jpg",
    "funny-duck-meme-generator.jpg",
    "funny-cat-free-meme-generator.jpg",
    "achieving-your-goals-meme-generator.png",
    "funny-animal-meme-generator.jpg",
    "funny-animal-meme-free-meme-create.jpg"
  ];
  return (
  <>
  
    <div className="bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 px-4">Free Meme Generator</h1>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 bg-red-100 p-4">
        {themes.map((theme, index) => (
          <div key={index}>
            <Image src={'/'+theme} height={300} width={300} alt="Meme" className="rounded-lg" />
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-4 mb-6 border-t bg-green-100 w-full place-content-center	py-4">
    
        <div className="border p-4 bg-white">
          <label htmlFor="meme-background">Select Your Image</label>
          <input
            name="meme-background"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>

        <div className="border p-4 bg-white">
          <input
            type="text"
            placeholder="Top Text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
            name="headBg"
          />
          <label htmlFor="headBg">Top Text</label>
          <div>
            <input
              type="color"
              id="head"
              className="color-box"
              name="head"
              defaultValue="#CC95E9"
              onChange={(e) => setTopBG(e.target.value)}
              />
            <label htmlFor="head">BG</label>

            <input
              type="color"
              id="headcolor"
              className="ml-2 color-box"
              name="headcolor"
              defaultValue="#0B005C"
              onChange={(e) => setTopColor(e.target.value)}
              />
            <label htmlFor="headcolor">Text</label>

            <select
              id="fontbutton"
              className="ml-2 color-box"
              name="fontbutton"
              defaultValue={1}
              onChange={(e) => setTopFont(e.target.value)}
              >
                <option value={.5}>Small</option>
                <option value={1}>Normal</option>
                <option value={2}>Big</option>
                <option value={3}>Large</option>
                <option value={4}>Largest</option>
              </select> &nbsp;
            <label htmlFor="fontbutton">Font</label>
          </div>
        </div>
        
        <div className="border p-4 bg-white">
          <input
            type="text"
            placeholder="Bottom Text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
            name="bottomText"
          />
          <label htmlFor="bottomText">Bottom TEXT</label>
          <div>
            <input
              type="color"
              id="BottomBG"
              className="color-box"
              name="BottomBG"
              defaultValue="#add8e6"
              onChange={(e) => setBottomBG(e.target.value)}
              />
            <label htmlFor="BottomBG">BG</label>

            <input
              type="color"
              id="Bottom"
              className="ml-2 color-box"
              name="Bottom"
              defaultValue="#0B005C"
              onChange={(e) => setbottomColor(e.target.value)}
              />
            <label htmlFor="Bottom">Text</label>

            <select
              id="fontbuttonbottom"
              className="ml-2 color-box"
              name="fontbuttonbottom"
              defaultValue={1}
              onChange={(e) => setBottomFont(e.target.value)}
              >
                <option value={.5}>Small</option>
                <option value={1}>Normal</option>
                <option value={2}>Big</option>
                <option value={3}>Large</option>
                <option value={4}>Largest</option>
              </select> &nbsp;
            <label htmlFor="fontbutton">Font</label>
          </div>
        </div>
      </div>
      <hr />
      <div
        style={{
          width: "90vw",
          height: "100vh",
          border: "1px solid black",
          position: "relative",
          overflow: "hidden",
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        >
        
        {image && (
          <div
            ref={memeRef}
            className="absolute overflow-hidden rounded-lg shadow-lg"
          >
            <div
              key={items[0].id}
              draggable
              onDragStart={(e) => handleDragStart(e, items[0].id)}
              style={{
                backgroundColor: topBG? topBG : "#CC95E9",
                color: topColor ? topColor : "#0B005C",
                position: "absolute",
                top: items[0].y,
                left: items[0].x,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "grab",
                border: "3px solid rgb(175 51 240)",
                borderRadius: "10px",
                padding: "10px",
                fontSize: topFont ? topFont+'em' : '1em',
                zIndex: "1"
              }}
            >
              {topText}
            </div>
            <div
              key={items[1].id}
              draggable
              onDragStart={(e) => handleDragStart(e, items[1].id)}
              style={{
                backgroundColor: bottomBG? bottomBG : "#add8e6",
                color: bottomColor ? bottomColor : "#0B005C",
                position: "absolute",
                top: items[1].y,
                left: items[1].x,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "grab",
                border: "3px solid rgb(88 182 213)",
                borderRadius: "10px",
                padding: "10px",
                fontSize: bottomFont ? bottomFont+'em' : '1em',
                zIndex: "1"
              }}
            >
              {bottomText}
            </div>
            <Image src={image} width={300} height={300} alt="Meme" className="w-full h-auto rounded-lg" />
          </div>
        )}
        
      </div>
      <hr />
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