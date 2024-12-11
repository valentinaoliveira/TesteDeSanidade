import React, { useState } from "react";

function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === "admin" && password === "1234") {
      setMessage({ text: "Login realizado com sucesso", type: "success" });
    } else {
      setMessage({ text: "Credenciais inválidas", type: "error" });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.title}>Login</h2>
          <div style={styles.inputGroup}>
            <label htmlFor="login">Login:</label>
            <input
              id="login"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password">Senha:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>
        {message && (
          <p
            style={{
              ...styles.message,
              color: message.type === "success" ? "green" : "red",
            }}
          >
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f5",
  },
  box: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    marginBottom: "1rem",
    fontSize: "1.5rem",
    color: "#333",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  input: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "0.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
  message: {
    marginTop: "1rem",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

export default LoginForm;
