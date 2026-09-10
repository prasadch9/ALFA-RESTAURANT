import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageSlider({ slides }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    timerRef.current = setInterval(next, 2000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const restart = (fn) => {
    clearInterval(timerRef.current);
    fn();
    timerRef.current = setInterval(next, 2000);
  };

  return (
    <div className="relative w-full h-[62vh] md:h-[82vh] overflow-hidden bg-char">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.caption}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink-fade" />
        </div>
      ))}

      {/* Caption + brand overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-16 md:pb-24 px-6 text-center">
        <p className="font-display text-3xl md:text-6xl text-bone text-extrude tracking-tightish max-w-4xl animate-rise">
          {slides[index].caption}
        </p>
        <div className="gold-rule w-24 mt-5 rounded-full" />
      </div>

      {/* Arrows */}
      <button
        onClick={() => restart(prev)}
        aria-label="Previous slide"
        className="absolute z-30 left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-ink/60 border border-white/15 backdrop-blur flex items-center justify-center text-bone hover:bg-gold hover:text-ink transition-colors shadow-pop"
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        onClick={() => restart(next)}
        aria-label="Next slide"
        className="absolute z-30 right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-ink/60 border border-white/15 backdrop-blur flex items-center justify-center text-bone hover:bg-gold hover:text-ink transition-colors shadow-pop"
      >
        <FaChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute z-30 bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => restart(() => setIndex(i))}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-7 bg-gold" : "w-2 bg-bone/40 hover:bg-bone/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
