function FeedbackList({ feedbacks }) {
  return (
    <div>
      <h2>Submitted Feedback</h2>

      {feedbacks.length === 0 && (
        <p>No feedback submitted yet.</p>
      )}

      {feedbacks.map((feedback, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #e5e7eb",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.08)",
            background: "#fff",
          }}
        >
          <h3>{feedback.name}</h3>

          <p>
            <strong>Email:</strong>{" "}
            {feedback.email}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            {feedback.rating}/5
          </p>

          <p>{feedback.message}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;
