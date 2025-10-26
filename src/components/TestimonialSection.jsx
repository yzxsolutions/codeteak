import { AnimatedTestimonials } from "./ui/animated-testimonials";
import BlurText from "./ui/BlurText";


export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Mubashir Thalipparamban",
      designation: "Founder & Creative Head",
      src: "/images/testimonial1.png",
    },
    {
      quote:
        "Yaadro has been a game-changer for our business. It has completely transformed how we manage our deliveries and has made our operations more efficient and streamlined.",
      name: "Sai",
      designation: "General Manager of Qasar al Haya",
      src: "/images/testimonial2.png",
    },
    {
      quote:
        "The website is very user-friendly and has a lot of features that are very helpful for the customers. The website is very easy to use and has a lot of features that are very helpful for the customers.",
      name: "Aseem Basha",
      designation: "Founder of Optical World",
      src: "/images/testimonial3.png",
    },
  ];
  return (
  <div className="p-3">

    <BlurText
  text="Trusted by Our Customers"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-5xl md:text-7xl font-langits  gap-2 mb-10 justify-center font-medium"
/>

    <AnimatedTestimonials testimonials={testimonials} />
  </div>
  );
}
