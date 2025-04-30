import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSend } from "react-icons/io5";

const GeminiUi = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMessage = { text: prompt, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://marathon-hub-server-chi.vercel.app/geminiBot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );

      const data = await res.json();
      const aiText =
        typeof data.response === "string"
          ? data.response
          : data.response?.text || "No response from AI.";

      const aiMessage = { text: aiText, sender: "ai" };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Something went wrong. Please try again later.", sender: "ai" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileTap={{ scale: 0.9, rotate: 15 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="w-16 h-16 bg-blue-600 rounded-full shadow-lg text-white text-2xl flex items-center justify-center"
      >
        💬
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 w-[400px] h-[75vh] bg-white rounded-2xl shadow-xl overflow-hidden z-50 border"
          >
            {/* Background Layers */}
            <div className="absolute inset-0 bg-black/60 z-0 rounded-2xl" />
            <div
              className="absolute inset-0 bg-cover bg-center z-[-1] brightness-50"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/ddrkuksmu/image/upload/v1745513325/Bot_s0qjm7.jpg')",
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-4 flex flex-col h-full">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg  font-bold text-white">
                  EduConnect AI Chat
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-red-400 hover:text-red-600 text-xl font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-white/30"
              >
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className={`p-3 rounded-xl max-w-[80%] text-sm ${
                      msg.sender === "user"
                        ? "bg-blue-300 text-right self-end ml-auto text-gray-900"
                        : "bg-white/80 text-left self-start mr-auto text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}

                {/* Loading animation */}
                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-3 rounded-xl max-w-[80%] bg-white/80 text-left self-start mr-auto text-gray-800 flex items-center gap-2"
                  >
                    <img
                      src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Gemini"
                      alt="AI Avatar"
                      className="w-6 h-6"
                    />
                    <div className="flex space-x-1">
                      <span className="w-2 h-2 bg-gray-700 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 bg-gray-700 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 bg-gray-700 rounded-full animate-bounce" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Form */}
              <form
                onSubmit={handleGenerate}
                className="mt-2 flex gap-2 items-center"
              >
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 rounded-lg bg-white/90 text-gray-800 border border-gray-300 focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="text-blue-600 text-2xl hover:text-blue-800"
                >
                  <IoSend />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GeminiUi;
