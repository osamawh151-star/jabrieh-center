import React, { useState } from "react";

export default function App() {
  const [serial, setSerial] = useState("");
  const [result, setResult] = useState(null);

  const checkWarranty = () => {
    if (!serial.trim()) {
      setResult({
        type: "error",
        message: "Please enter your warranty or serial number.",
      });
      return;
    }

    setResult({
      type: "success",
      message: "Warranty information found.",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          background: "#ffffff",
          padding: "22px",
          textAlign: "center",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h1 style={{ margin: 0 }}>Jabrieh Center</h1>
        <p style={{ marginTop: "8px", color: "#666" }}>
          Warranty Verification
        </p>
      </header>

      <main
        style={{
          maxWidth: "500px",
          margin: "50px auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "30px 22px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Check Your Warranty</h2>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              lineHeight: "1.6",
            }}
          >
            Enter your warranty or serial number below to verify your product.
          </p>

          <input
            type="text"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            placeholder="Enter warranty number"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "15px",
              marginTop: "15px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              fontSize: "16px",
            }}
          />

          <button
            onClick={checkWarranty}
            style={{
              width: "100%",
              marginTop: "15px",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: "#111",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Check Warranty
          </button>

          {result && (
            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "center",
                background:
                  result.type === "success" ? "#eaf7ed" : "#fff0f0",
              }}
            >
              {result.message}
            </div>
          )}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "#777",
            fontSize: "13px",
          }}
        >
          © 2026 Jabrieh Center
        </p>
      </main>
    </div>
  );
}
