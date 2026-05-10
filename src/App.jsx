
import { useEffect, useRef, useState } from "react";
import { Heart, Upload } from "lucide-react";
import { toPng } from "html-to-image";

export default function App() {
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");

  const cardRef = useRef(null);

  const messages = [
    "Thank you Mom for always believing in me ❤️",
    "You are my first friend and forever hero 💖",
    "Home is wherever you are Mom 🌸",
    "Your love makes life beautiful 💕",
    "Everything I am is because of you ❤️",
    "Mom, you are my biggest blessing 🌷",
    "You make every day brighter ☀️",
    "Your hugs are my safest place 🤗",
  ];

  // Auto changing message
  useEffect(() => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);

    const interval = setInterval(() => {
      setMessage(
        messages[Math.floor(Math.random() * messages.length)]
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Upload Image
  const handleImage = (e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    reader.readAsDataURL(file);
  }
};

  // Download Full Card
const downloadCard = async () => {
  if (!cardRef.current) return;

  try {
    const dataUrl = await toPng(cardRef.current, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const link = document.createElement("a");

    link.download = "mothers-day-card.png";

    link.href = dataUrl;

    link.click();

  } catch (error) {
    console.log(error);
    alert("Download failed");
  }
};

  return (
    <div className="min-h-screen bg-pink-200 overflow-hidden relative flex items-center justify-center px-3 py-6">

      {/* Animated Hearts */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-heartFloat opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${15 + Math.random() * 25}px`,
            animationDuration: `${5 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          💖
        </div>
      ))}

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl bg-pink-100 border border-pink-300 rounded-[35px] shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-pink-500 text-white text-center py-5 px-4 relative overflow-hidden">

          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>

          <h1 className="relative flex items-center justify-center gap-2 text-3xl sm:text-5xl font-bold drop-shadow-lg animate-titleGlow">
            <Heart className="fill-white animate-pulse" />
            Happy Mother's Day
          </h1>

          <p className="relative mt-2 text-sm sm:text-lg">
            A magical surprise made with love 💕
          </p>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-8">

          {/* Upload Section */}
          {!preview && (
            <label className="w-full h-64 sm:h-80 border-4 border-dashed border-pink-300 rounded-3xl flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-white/50 transition-all duration-300">

              <Upload
                size={70}
                className="text-pink-600 animate-bounce"
              />

              <p className="mt-4 text-xl sm:text-3xl font-bold text-pink-700 text-center">
                Upload Mom's Photo
              </p>

              <p className="text-gray-700 mt-2 text-center text-sm sm:text-base">
                Create a beautiful Mother's Day Card ✨
              </p>

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                hidden
              />
            </label>
          )}

          {/* Card Section */}
          {preview && (
            <div className="animate-fadeIn">

              {/* Downloadable Area */}
              <div
                ref={cardRef}
                className="relative rounded-[35px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-[8px] border-pink-100"
              >

                {/* Image */}
                <img
                  src={preview}
                  alt="Mother"
                  className="w-full h-[420px] sm:h-[650px] object-cover"
                />

                {/* Overlay */}
                <div
  style={{
    background:
      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 35%, transparent 60%)",
  }}
  className="absolute inset-0"
></div>

                {/* Floating Decorations */}
                <div className="absolute top-4 right-4 text-3xl animate-bounce">
                  💖
                </div>

                <div className="absolute top-12 left-5 text-2xl animate-pulse">
                  🌸
                </div>

                <div className="absolute bottom-40 right-5 text-4xl animate-heartBeat">
                  ❤️
                </div>

                {/* Message Area */}
                <div className="absolute bottom-0 left-0 right-0 pt-28 pb-6 px-4 sm:px-8 text-center">

                  <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-2xl animate-titleGlow">
                    Happy Mother's Day 💖
                  </h1>

                  <p className="mt-3 text-sm sm:text-xl text-white leading-relaxed animate-messageFade">
                    {message}
                  </p>

                  <div className="mt-5 inline-block bg-white/20 px-5 py-2 rounded-full border border-white/30 animate-pulse">
                    <p className="text-white text-sm sm:text-lg font-semibold">
                      Love You Mom ❤️
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div
  style={{
    backgroundColor: "rgba(0,0,0,0.65)",
  }}
  className="absolute top-5 right-5 px-4 py-2 rounded-full z-50"
>
                  <p className="text-[10px] sm:text-xs text-white tracking-wide animate-pulse">
                    Designed by Diya Sharma ✨
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">

                {/* Change Photo */}
                <label className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full cursor-pointer text-center transition-all duration-300 hover:scale-105 shadow-lg">

                  Change Photo

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    hidden
                  />
                </label>

                {/* Download */}
                
                <button
  onClick={downloadCard}
  className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
>
  Download / Save
</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-heartFloat {
            animation: heartFloat linear infinite;
          }

          @keyframes heartFloat {
            from {
              transform: translateY(100vh) scale(0.8);
              opacity: 0;
            }
            20% {
              opacity: 0.5;
            }
            to {
              transform: translateY(-120vh) scale(1.2);
              opacity: 0;
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-messageFade {
            animation: messageFade 1s ease;
          }

          @keyframes messageFade {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }

          .animate-heartBeat {
            animation: heartBeat 1.5s infinite;
          }

          @keyframes heartBeat {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.3);
            }
            100% {
              transform: scale(1);
            }
          }

          .animate-titleGlow {
            animation: titleGlow 2s infinite alternate;
          }

          @keyframes titleGlow {
            from {
              text-shadow: 0 0 10px white;
            }
            to {
              text-shadow: 0 0 25px pink;
            }
          }
        `}
      </style>
    </div>
  );
}



