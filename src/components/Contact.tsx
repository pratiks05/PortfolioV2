import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

// Type for form fields
interface FormDataType {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setState] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xzzdnyky", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  // Shared input styles
  const inputStyles: React.CSSProperties = {
    backgroundColor: "rgba(18, 18, 23, 0.8)",
    WebkitAppearance: "none",
    appearance: "none",
    color: "white",
    caretColor: "white",
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <div className="max-w-2xl mx-auto px-4">
        <form
          className="mt-8 border border-neutral-900 p-8"
          style={{ borderWidth: "1px", backgroundColor: "rgba(18, 18, 23, 0.5)" }}
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 border-b border-neutral-900 focus:outline-none font-semibold text-white"
              style={inputStyles}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 border-b border-neutral-900 focus:outline-none font-semibold text-white"
              style={inputStyles}
              required
            />
          </div>

          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 border-b border-neutral-900 focus:outline-none font-semibold text-white resize-none"
              style={inputStyles}
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={`w-full mt-4 px-6 py-3 text-center text-white border border-neutral-900 transition-colors ${
              status === "sending"
                ? "bg-gray-800 cursor-not-allowed"
                : "bg-transparent hover:bg-neutral-900 hover:text-white"
            }`}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "success" && (
            <p className="mt-4 text-center text-green-400 font-medium">
              Your message has been sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-center text-red-400 font-medium">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
