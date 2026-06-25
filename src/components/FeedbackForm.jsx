import { useForm } from "../hooks/useForm";

function FeedbackForm({ addFeedback, showToast }) {
  const validate = (vals) => {
    const errors = {};

    if (!vals.name.trim()) {
      errors.name = "Name is required";
    }

    if (!vals.email.includes("@")) {
      errors.email = "Valid email is required";
    }

    if (!vals.rating) {
      errors.rating = "Rating is required";
    }

    if (!vals.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const {
    values,
    errors,
    handleChange,
    validateForm,
    resetForm,
  } = useForm(
    {
      name: "",
      email: "",
      rating: "",
      message: "",
    },
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast(
        "Please fix the errors below",
        "error"
      );
      return;
    }

    addFeedback(values);

    showToast(
      "Feedback submitted!",
      "success"
    );

    resetForm();
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginTop: "5px",
    marginBottom: "5px",
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>

      <input
        style={inputStyle}
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />

      <p style={{ color: "red" }}>
        {errors.name}
      </p>

      <label>Email</label>

      <input
        style={inputStyle}
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />

      <p style={{ color: "red" }}>
        {errors.email}
      </p>

      <label>Rating</label>

      <select
        style={inputStyle}
        name="rating"
        value={values.rating}
        onChange={handleChange}
      >
        <option value="">
          Select Rating
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <p style={{ color: "red" }}>
        {errors.rating}
      </p>

      <label>Message</label>

      <textarea
        style={inputStyle}
        rows="4"
        name="message"
        value={values.message}
        onChange={handleChange}
      />

      <p style={{ color: "red" }}>
        {errors.message}
      </p>

      <button
        type="submit"
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Submit Feedback
      </button>
    </form>
  );
}

export default FeedbackForm;
