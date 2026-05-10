import { useEffect, useState } from "react";
import { Heart, Upload, Sparkles } from "lucide-react";

export default function App() {
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");

  // Random Messages
  const messages = [
    "Thank you Mom for always believing in me ❤️",
    "You are my first friend and forever hero 💖",
    "Home is wherever you are Mom 🌸",
    "Your love makes life beautiful 💕",
    "Everything I am is because of you ❤️",
    "Mom, you are my biggest blessing 🌷",
    "You make every day brighter ☀️",
    "Your hugs are my safest place 🤗",
    "Life is beautiful because of you Mom 💝",
    "You are the queen of our hearts 👑",
  ];

  // Change Message Every 3 Seconds
  useEffect(() => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);

    const interval = setInterval(() => {
      const random =
        messages[Math.floor(Math.random() * messages.length)];

      setMessage(random);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Upload Image
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400 relative flex items-center justify-center p-5">

      {/* Floating Hearts Background */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-500 opacity-30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            fontSize: `${15 + Math.random() * 30}px`,
            top: `${Math.random() * 100}%`,
          }}
        >
          💖
        </div>
      ))}

      {/* Main Card */}
      <div className="relative z-10 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-[40px] max-w-5xl w-full overflow-hidden animate-card">

        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white text-center py-8 px-4 relative overflow-hidden">

          <div className="absolute inset-0 opacity-20 animate-pulse bg-white"></div>

          <h1 className="relative text-5xl md:text-6xl font-extrabold flex items-center justify-center gap-3 animate-glow">
            <Heart className="fill-white animate-heartbeat" size={50} />
            Happy Mother's Day
          </h1>

          <p className="relative mt-4 text-lg md:text-xl animate-fade">
            A magical surprise made with love 💕
          </p>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10 flex flex-col items-center">

          {/* Upload */}
          {!preview && (
            <label className="group border-4 border-dashed border-pink-300 hover:border-pink-500 transition-all duration-500 rounded-[35px] w-full h-96 flex flex-col items-center justify-center cursor-pointer bg-white/30 hover:bg-white/40">

              <div className="animate-bounce">
                <Upload
                  size={90}
                  className="text-pink-600 group-hover:scale-110 transition-all duration-300"
                />
              </div>

              <p className="mt-6 text-3xl font-bold text-pink-700">
                Upload Mom's Photo
              </p>

              <p className="text-gray-700 mt-3 text-lg">
                Create a magical Mother's Day card ✨
              </p>

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                hidden
              />
            </label>
          )}

          {/* Greeting Card */}
          {preview && (
            <div className="w-full animate-fadeScale">

              <div className="relative rounded-[35px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] group">

                {/* Image */}
                <img
                  src={preview}
                  alt="Mother"
                  className="w-full h-[650px] object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Sparkles */}
                <Sparkles className="absolute top-10 left-10 text-yellow-300 animate-spinSlow" size={35} />

                <Sparkles className="absolute top-20 right-14 text-pink-300 animate-pulse" size={30} />

                <div className="absolute bottom-36 left-10 text-4xl animate-float2">
                  🌸
                </div>

                <div className="absolute top-1/2 right-10 text-5xl animate-float3">
                  💖
                </div>

                {/* Message Section */}
                <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-md bg-white/10 border-t border-white/20">

                  <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl animate-textGlow">
                    Happy Mother's Day 💖
                  </h1>

                  <p className="mt-5 text-xl md:text-2xl text-white leading-relaxed font-medium animate-message">
                    {message}
                  </p>

                  <div className="mt-6 inline-block bg-white/20 px-6 py-3 rounded-full border border-white/30 animate-pulse">
                    <p className="text-white text-lg font-bold">
                      Forever Grateful ❤️
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-5 mt-8">

                <label className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full cursor-pointer transition-all duration-300 shadow-2xl hover:scale-110">
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
                  className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-110"
                >
                  Download / Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          .animate-heartbeat {
            animation: heartbeat 1.5s infinite;
          }

          @keyframes heartbeat {
            0% { transform: scale(1); }
            25% { transform: scale(1.2); }
            40% { transform: scale(1); }
            60% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }

          .animate-fadeScale {
            animation: fadeScale 1s ease;
          }

          @keyframes fadeScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-card {
            animation: cardFloat 5s ease-in-out infinite;
          }

          @keyframes cardFloat {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }

          .animate-glow {
            animation: glow 2s infinite alternate;
          }

          @keyframes glow {
            from {
              text-shadow: 0 0 10px white;
            }
            to {
              text-shadow: 0 0 30px pink;
            }
          }

          .animate-float {
            animation: float linear infinite;
          }

          @keyframes float {
            from {
              transform: translateY(100vh) rotate(0deg);
            }
            to {
              transform: translateY(-120vh) rotate(360deg);
            }
          }

          .animate-float2 {
            animation: float2 4s ease-in-out infinite;
          }

          @keyframes float2 {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }

          .animate-float3 {
            animation: float3 5s ease-in-out infinite;
          }

          @keyframes float3 {
            0% { transform: translateX(0px); }
            50% { transform: translateX(-20px); }
            100% { transform: translateX(0px); }
          }

          .animate-spinSlow {
            animation: spin 8s linear infinite;
          }

          .animate-textGlow {
            animation: textGlow 2s infinite alternate;
          }

          @keyframes textGlow {
            from {
              text-shadow: 0 0 10px #fff;
            }
            to {
              text-shadow: 0 0 25px pink;
            }
          }

          .animate-message {
            animation: fadeMessage 1s ease;
          }

          @keyframes fadeMessage {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }
        `}
      </style>
    </div>
  );
}