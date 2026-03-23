import { useState } from "react";
import axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!task) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await axios.post("https://ai-backend-e688.onrender.com/solve-task", {
        task: task,
      });
      setResult(res.data);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Error connecting to backend");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AI Workflow Simulator</h1>
      <div style={styles.emoji}>🚀</div>

      <textarea
        style={styles.textarea}
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button style={styles.button} onClick={handleSubmit}>
        Run
      </button>

      {loading && <p style={styles.loading}>Processing...</p>}

      {result && (
        <div style={styles.card}>
          <h3>Steps:</h3>
          <ul>
            {result.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>

          <h3>Final Answer:</h3>
          <p>{result.final_answer}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "60px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    color: "white",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #444",
    backgroundColor: "#1e1e1e",
    color: "white",
    fontSize: "16px",
  },
  button: {
    marginTop: "20px",
    padding: "12px 25px",
    border: "none",
    background: "linear-gradient(45deg, #4CAF50, #2ecc71)",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "0.3s",
  },
  loading: {
    marginTop: "20px",
    fontWeight: "bold",
    color: "#00ffcc",
  },
  card: {
    marginTop: "30px",
    padding: "25px",
    borderRadius: "12px",
    backgroundColor: "#1e1e1e",
    textAlign: "left",
    boxShadow: "0 0 15px rgba(0,0,0,0.5)",
  },
};

export default App;