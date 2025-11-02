import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa"; // Import star icon
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sneha Reddy",
    feedback:
      "Shravan captured our wedding moments beautifully! Every picture felt natural and full of emotion. His patience and creativity truly made the day unforgettable.",
  },
  {
    name: "Rahul & Priya",
    feedback:
      "Our pre-wedding shoot with Shots by Shravan was magical! The ideas, locations, and lighting were perfect. We felt completely at ease throughout the session.",
  },
  {
    name: "Aarav Kumar",
    feedback:
      "Such a talented team! They made my baby’s first birthday shoot super fun and comfortable. The photos turned out adorable and full of life.",
  },
  {
    name: "Divya Sharma",
    feedback:
      "Had my maternity shoot done with Shots by Shravan and it was such a memorable experience. The pictures are timeless — warm, elegant, and beautifully captured.",
  },
  {
    name: "Harish & Anjali",
    feedback:
      "Shravan and his team exceeded our expectations! They were professional, friendly, and knew exactly how to bring out the best moments. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>
        What our customers say
        <br />
        about us
      </h2>
      <div className="testimonial-list">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* 5 Star Rating */}
            <div className="star-rating">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} color="#FFD700" size={16} />
              ))}
            </div>

            <p className="feedback">{t.feedback}</p>
            <p className="name">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
