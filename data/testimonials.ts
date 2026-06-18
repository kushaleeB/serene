import type { Testimonial } from "@/types";

export const testimonialsContent = {
  eyebrow: "Testimonials",
  title: "Stories from Our Guests",
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-01",
    name: "Elena & Marco Rossi",
    country: "Italy",
    rating: 5,
    review:
      "SERENE exceeded every expectation. The villa felt like our own private world — impeccable design, warm staff, and sunsets we will never forget. We have traveled widely, and this ranks among the finest stays of our lives.",
    image: "/img/testimonials/elena-marco.jpg",
    alt: "Portrait of Elena and Marco Rossi",
  },
  {
    id: "testimonial-02",
    name: "James Whitfield",
    country: "United Kingdom",
    rating: 5,
    review:
      "A masterclass in understated luxury. The attention to detail is extraordinary — from the morning yoga to the private chef's tasting menu. SERENE is the kind of place you return to in your mind long after you've left.",
    image: "/img/testimonials/james-whitfield.jpg",
    alt: "Portrait of James Whitfield",
  },
  {
    id: "testimonial-03",
    name: "Priya & Arjun Mehta",
    country: "Singapore",
    rating: 5,
    review:
      "We chose SERENE for our honeymoon and it was perfection. The Cliff Residence offered privacy, beauty, and a sense of calm we didn't know we needed. The team anticipated our every wish before we even asked.",
    image: "/img/testimonials/priya-arjun.jpg",
    alt: "Portrait of Priya and Arjun Mehta",
  },
];
