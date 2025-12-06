import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export const ParticleField = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const colors = [
    "hsl(340 75% 55% / 0.4)",
    "hsl(30 90% 60% / 0.4)",
    "hsl(270 60% 60% / 0.3)",
    "hsl(200 80% 60% / 0.3)",
  ];

  const particles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100 + 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            bottom: `-${particle.size}px`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            x: [0, Math.sin(particle.id) * 50],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Floating orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(340 75% 55% / 0.3) 0%, transparent 70%)",
          top: "20%",
          right: "10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(270 60% 60% / 0.3) 0%, transparent 70%)",
          bottom: "10%",
          left: "5%",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(30 90% 60% / 0.3) 0%, transparent 70%)",
          top: "60%",
          right: "30%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
