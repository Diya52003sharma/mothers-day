import { useEffect, useState } from "react";
import { Heart, Upload } from "lucide-react";

export default function App() {
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");

  const messages = [
    "Thank you Mom for always believing in me ❤️",
    "You are my first friend and forever hero 💖",
    "Home is wherever you are Mom 🌸",
    "Your love makes life beautiful 💕",
    "Everything I am is because of you ❤️",
    "Mom, you are my biggest blessing 🌷",
    "You make every day brighter ☀️",
  ];

  useEffect(() => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);

    const interval = setInterval(() => {
      setMessage(
        messages[Math.floor(Math.random() * messages.length)]
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400 overflow-hidden relative flex items-center justify-center px-3 py-6">

      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${15 + Math.random() * 20}px`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        >
          💖
        </div>
      ))}

      {/* Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-center py-5 px-4">
          <h1 className="flex items-center justify-center gap-2 text-3xl sm:text-5xl font-bold">
            <Heart className="fill-white" />
            Happy Mother's Day
          </h1>

          <p className="mt-2 text-sm sm:text-lg">
            A magical surprise made with love 💕
          </p>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-8">

          {/* Upload */}
          {!preview && (
            <label className="w-full h-64 sm:h-80 border-4 border-dashed border-pink-300 rounded-3xl flex flex-col items-center justify-center bg-white/30 cursor-pointer hover:bg-white/40 transition-all">

              <Upload
                size={60}
                className="text-pink-600 animate-bounce"
              />

              <p className="mt-4 text-xl sm:text-3xl font-bold text-pink-700 text-center">
                Upload Mom's Photo
              </p>

              <p className="text-gray-700 mt-2 text-center text-sm sm:text-base">
                Create a beautiful Mother's Day card ✨
              </p>

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                hidden
              />
            </label>
          )}

          {/* Greeting */}
          {preview && (
            <div className="animate-fadeIn">

              <div className="relative rounded-3xl overflow-hidden shadow-2xl">

                {/* Image */}
                <img
                  src={preview}
                  alt="Mother"
                  className="w-full h-[400px] sm:h-[600px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Bottom Message */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 bg-black/30 backdrop-blur-md">

                  <h1 className="text-2xl sm:text-5xl font-bold text-white text-center">
                    Happy Mother's Day 💖
                  </h1>

                  <p className="mt-3 text-sm sm:text-xl text-white text-center leading-relaxed">
                    {message}
                  </p>

                  <div className="flex justify-center">
                    <div className="mt-4 bg-white/20 px-4 py-2 rounded-full border border-white/30">
                      <p className="text-white text-sm sm:text-lg font-semibold">
                        Love You Mom ❤️
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">

                <label className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full cursor-pointer text-center transition-all">
                  Change Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    hidden
                  />
                </label>

                <button
                  onClick={() => window.print()}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full transition-all"
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
          .animate-float {
            animation: float linear infinite;
          }

          @keyframes float {
            from {
              transform: translateY(100vh);
            }
            to {
              transform: translateY(-120vh);
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
        `}
      </style>
    </div>
  );
}