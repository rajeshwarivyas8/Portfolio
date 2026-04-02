import { useState, useRef, useEffect } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello 👋 I am Rajeshwari's AI assistant" },
    { type: "bot", text: "Ask about skills, projects, experience, About, achievements, or contact info" }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: input }]);
    const userMessage = input;
    setInput("");
    setTyping(true);

    try {
      const response = await fetch("https://portfolio-backend-jjqj.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Debug log

      // Typing delay
      setTimeout(() => {
        // Replace \n with <br/> for multiline messages
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: data.reply.split("\n").map((line, index) => (<span key={index}>{line}<br/></span>)) }
        ]);
        setTyping(false);
      }, 800);
    } catch (error) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "Oops! Backend not reachable." },
        ]);
        setTyping(false);
      }, 800);
    }
  };

  return (
    <div>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
          width: "75px",
          height: "75px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 0 30px rgba(6,182,212,0.8)",
          transition: "0.3s",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
          style={{ width: "55px" }}
        />
      </div>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "110px",
            right: "25px",
            width: "390px",
            height: "540px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(15px)",
            boxShadow: "0 0 40px rgba(0,0,0,0.2)",
            overflow: "hidden",
            animation: "fadeIn 0.3s",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
              color: "white",
              padding: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                style={{ width: "35px" }}
              />
              <div>
                <div style={{ fontWeight: "bold" }}>AI Assistant</div>
                <div style={{ fontSize: "12px" }}>Online</div>
              </div>
            </div>
            <div
              onClick={() => setOpen(false)}
              style={{ cursor: "pointer", fontSize: "20px" }}
            >
              ✖
            </div>
          </div>

          {/* Chat Area */}
          <div
            style={{
              height: "360px",
              overflowY: "auto",
              padding: "15px",
              flex: 1,
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.type === "user" ? "right" : "left",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: msg.type === "user" ? "#06b6d4" : "white",
                    color: msg.type === "user" ? "white" : "black",
                    padding: "10px",
                    borderRadius: "12px",
                    maxWidth: "75%",
                    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                    textAlign: "left",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing animation */}
            {typing && (
              <div>
                <div
                  style={{
                    display: "inline-block",
                    background: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
                  }}
                >
                  AI is typing...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div style={{ padding: "15px", display: "flex", gap: "10px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask about my work..."
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                color: "black",
                background: "white",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
                color: "white",
                border: "none",
                padding: "12px 18px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
