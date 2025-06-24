"use client";

import React, { FormEvent, useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraText } from "@/components/magicui/aurora-text";
import axios from "axios";

function MusicSchoolContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isValidPhone = (value: string) => /^\+?[0-9]{10,14}$/.test(value);

  const isValidInput = (value: string) =>
    isValidEmail(value) || isValidPhone(value);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidInput(email.trim())) {
      alert("Please enter a valid email address or phone number.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/emails", {
        user: email.trim(),
        msg: message.trim(),
      });

      if (response.status === 200) {
        setSubmitted(true);
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        "An error occurred while sending your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <AuroraBackground className="absolute top-0 left-0 w-full h-full z-0">
        <div className="max-w-2xl mx-auto p-4 relative z-10">
          <h1 className="text-lg sm:text-7xl text-center font-sans font-bold mb-8 text-white">
            <AuroraText>Contact Us</AuroraText>
          </h1>

          <p className="text-neutral-200 max-w-lg mx-auto my-2 text-sm text-center">
            We&apos;re here to help with any questions, programs, or events.
            Reach out and let us know how we can assist you in your journey.
          </p>

          {submitted ? (
            <p className="text-green-400 text-center text-lg mt-6">
              Your response was sent successfully. We will contact you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-white mt-4">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address / Phone number"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                rows={5}
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading || submitted}
                className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </AuroraBackground>
    </div>
  );
}

export default MusicSchoolContactUs;