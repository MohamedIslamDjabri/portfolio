import React, { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  const data = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, 3)];

  // AUTO LOOP
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4500); // slower
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // LOOP RESET
  useEffect(() => {
    if (index === TESTIMONIALS.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 1800); // match duration
    } else {
      setIsTransitioning(true);
    }
  }, [index]);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  return (
    <div className="pb-20">
      <h2 className="my-20 text-center text-4xl">Testimonials</h2>

      <div className="relative max-w-6xl mx-auto overflow-visible">

        {/* LEFT BUTTON (OUTSIDE) */}
        <button
          onClick={prev}
          className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-stone-800 p-3 rounded-full hover:bg-stone-700"
        >
          <FaChevronLeft />
        </button>

        {/* RIGHT BUTTON (OUTSIDE) */}
        <button
          onClick={next}
          className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-stone-800 p-3 rounded-full hover:bg-stone-700"
        >
          <FaChevronRight />
        </button>

        {/* VIEWPORT */}
        <div className="overflow-hidden pt-16">

          {/* TRACK */}
          <div
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)"
                : ""
            }`}
            style={{
              transform: `translateX(-${index * (100 / 3)}%)`,
            }}
          >
            {data.map((t, i) => (
              <div key={i} className="w-1/3 flex-shrink-0 px-3">

                {/* CARD */}
                <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 text-center relative pt-20 overflow-visible"
                     onMouseDown={stopAutoSlide}
                     onMouseUp={startAutoSlide}
                >

                  {/* AVATAR (FIXED CUT ISSUE) */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <img
                      src={t.image || "/avatar.png"}
                      alt={t.name}
                      className="w-24 h-24 rounded-full border-4 border-stone-900 object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                    “{t.text}”
                  </p>

                  {/* NAME */}
                  <h4 className="font-semibold">{t.name}</h4>

                  {/* ROLE */}
                  <span className="text-sm text-stone-400">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;