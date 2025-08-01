"use client";

import { useRef, useEffect, useState } from "react";
import { FileText, Mail, MapPin } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-sm uppercase tracking-wider text-purple-500 mb-2">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Skilled Front-End Developer with expertise in HTML, CSS,
              JavaScript, Bootstrap, and React.
            </h3>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </div>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed text-center">
            Currently pursuing a Bachelor's in Business Information Systems at
            Tanta University. Passionate about creating responsive,
            user-friendly applications and eager to learn new technologies.
            Strong team player with excellent problem-solving and communication
            skills.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-xl mx-auto">
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
              <MapPin className="text-purple-500" size={24} />
              <span className="text-gray-300">Egypt</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg w-max">
              <Mail className="text-purple-500" size={24} />
              <span className="text-gray-300">
                kareemmohamedali330@gmail.com
              </span>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/Kareem_Mohamed_Ali.pdf" // ✅ File must be inside `public/`
              download="Kareem_Mohamed_Ali.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-all hover:scale-105"
            >
              <FileText size={18} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
