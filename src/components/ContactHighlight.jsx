"use client";
import { motion } from "motion/react";
import { ContactHightlight, Highlight } from "./ui/contact-highlight";
import ContactFormMockup from "./ContactForm";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaFacebook, FaXTwitter } from "react-icons/fa6"; // or "react-icons/fa" for older versions

export function ContactHero() {
  return (
    <ContactHightlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl mb-7 px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Let’s Build Something Extraordinary <br className="md:hidden" />
        Together. <br />
        <Highlight className="text-black dark:text-white font-langits tracking-wider">
          Contact Us Today
        </Highlight>
      </motion.h1>

      <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-300 px-4 max-w-2xl mx-auto mb-8">
        Whether you're starting from scratch or scaling your next big idea, our
        team of experts is ready to help you launch, grow, and innovate with
        confidence.
      </p>
      {/* Social Icons */}
      <div className="flex justify-center gap-6 my-10 text-2xl text-neutral-600 dark:text-neutral-300">
        <a href="https://www.instagram.com/codeteaks?utm_source=ig_web_button_share_sheet&igsh=MWRhODJ6ejZwMjhzOQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="hover:text-pink-500 transition" />
        </a>
        <a href="https://www.linkedin.com/company/codeteak/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="hover:text-blue-600 transition" />
        </a>
        <a href="https://wa.me/8075456297" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp className="hover:text-green-500 transition" />
        </a>
        <a href="https://x.com/codeteak" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <FaXTwitter className="hover:text-black dark:hover:text-white transition" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61575111071671" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook className="hover:text-blue-500 transition" />
        </a>
      </div>

      <ContactFormMockup />
      
    </ContactHightlight>
  );
}
