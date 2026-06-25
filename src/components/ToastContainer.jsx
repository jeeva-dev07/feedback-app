function ToastContainer({ toasts }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            backgroundColor:
              toast.type === "success"
                ? "#22c55e"
                : "#ef4444",
            color: "white",
            padding: "12px 18px",
            borderRadius: "8px",
            marginBottom: "10px",
            minWidth: "220px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
