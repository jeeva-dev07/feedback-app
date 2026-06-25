import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import ToastContainer from "./components/ToastContainer";
import { useToast } from "./hooks/useToast";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const { toasts, showToast } = useToast();

  const addFeedback = (feedback) => {
    setFeedbacks((prev) => [...prev, feedback]);
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "30px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1>Feedback App</h1>

      <FeedbackForm
        addFeedback={addFeedback}
        showToast={showToast}
      />

      <hr style={{ margin: "30px 0" }} />

      <FeedbackList feedbacks={feedbacks} />

      <ToastContainer toasts={toasts} />
    </div>
  );
}

export default App;
