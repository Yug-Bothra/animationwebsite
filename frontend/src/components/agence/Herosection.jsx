import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


const HeroSection = () => {
  const canvasRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;


    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    // Particle system
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }


      update() {
        this.x += this.speedX;
        this.y += this.speedY;


        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }


      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }


    const particles = Array.from({ length: 100 }, () => new Particle());


    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);


      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });


      requestAnimationFrame(animate);
    }


    animate();


    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };


    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section className="hero-dark">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      
      <div className="scan-lines"></div>
      <div className="grid-overlay"></div>
      
      <div className="hero-container">
        <motion.div 
          className="glitch-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          >
            <span className="badge-text">AUTHORIZED PARTNERS</span>
            <div className="badge-glow"></div>
          </motion.div>


          <motion.h1 
            className="hero-heading"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="text-line" data-text="OUR GLOBAL">OUR GLOBAL</span>
            <span className="text-line text-highlight" data-text="NETWORK.">NETWORK.</span>
            <span className="text-line" data-text="YOUR LOCAL">YOUR LOCAL</span>
            <span className="text-line text-highlight" data-text="ADVANTAGE.">ADVANTAGE.</span>
          </motion.h1>
          
          <motion.div 
            className="hero-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          ></motion.div>


          <motion.p 
            className="hero-subtext"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <span className="subtext-highlight">Coca-Cola</span> operates through a vast network of 
            <span className="subtext-highlight"> authorized agencies</span> and 
            <span className="subtext-highlight"> bottling partners</span> worldwide—ensuring 
            quality, consistency, and community impact in every region.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            <motion.button 
              className="cta-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 255, 255, 0.6)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="button-text">BECOME A PARTNER</span>
              <span className="button-icon">→</span>
              <div className="button-glow"></div>
            </motion.button>
            
            <motion.button 
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="button-text">FIND AN AGENCY</span>
              <span className="button-icon">🔍</span>
            </motion.button>
          </motion.div>


          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">COUNTRIES</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">PARTNERS</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">IMPACT</div>
            </div>
          </motion.div>
        </motion.div>
      </div>


      <div className="hero-gradient-orb"></div>
      
      <style jsx>{`
        .hero-dark {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000;
          overflow: hidden;
        }


        .particle-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }


        .scan-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0px,
            rgba(0, 0, 0, 0) 1px,
            rgba(255, 255, 255, 0.03) 1px,
            rgba(255, 255, 255, 0.03) 2px
          );
          pointer-events: none;
          z-index: 2;
          animation: scanlines 8s linear infinite;
        }


        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }


        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 1;
          opacity: 0.3;
        }


        .hero-container {
          position: relative;
          max-width: 1600px;
          margin: 0 auto;
          padding: 2rem;
          z-index: 10;
        }


        .glitch-wrapper {
          text-align: center;
        }


        .hero-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.8rem 2rem;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid #ffffff;
          position: relative;
          margin-bottom: 3rem;
          clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
        }


        .badge-text {
          font-family: 'Rajdhani', 'Orbitron', monospace;
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.3em;
          position: relative;
          z-index: 2;
        }


        .badge-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #ffffff;
          filter: blur(20px);
          opacity: 0.3;
          animation: glowPulse 2s ease-in-out infinite;
        }


        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }


        .hero-heading {
          font-family: 'Teko', 'Rajdhani', sans-serif;
          font-size: clamp(3rem, 10vw, 9rem);
          font-weight: 700;
          line-height: 1;
          color: #ffffff;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }


        .text-line {
          position: relative;
          display: inline-block;
          text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.5),
            0 0 20px rgba(255, 255, 255, 0.3),
            0 0 40px rgba(255, 255, 255, 0.2);
          animation: flicker 3s infinite;
        }


        .text-highlight {
          color: #ffffff;
          text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(255, 255, 255, 0.6),
            0 0 40px rgba(255, 255, 255, 0.4),
            0 0 80px rgba(255, 255, 255, 0.2);
        }


        @keyframes flicker {
          0%, 100% { opacity: 1; }
          41.99% { opacity: 1; }
          42% { opacity: 0.8; }
          43% { opacity: 1; }
          45.99% { opacity: 1; }
          46% { opacity: 0.85; }
          46.5% { opacity: 1; }
        }


        .hero-line {
          height: 3px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            #ffffff 20%, 
            #ffffff 80%, 
            transparent 100%
          );
          margin: 2rem auto;
          max-width: 600px;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
        }


        .hero-subtext {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          line-height: 1.8;
          color: #a0a0a0;
          max-width: 900px;
          margin: 0 auto 3rem;
          font-weight: 500;
          letter-spacing: 0.02em;
        }


        .subtext-highlight {
          color: #ffffff;
          font-weight: 600;
          position: relative;
        }


        .subtext-highlight::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #ffffff, transparent);
          opacity: 0.5;
        }


        .hero-cta {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }


        .cta-primary,
        .cta-secondary {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          padding: 1.5rem 3rem;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          clip-path: polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%);
        }


        .cta-primary {
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          color: #000000;
          border: 2px solid #ffffff;
          box-shadow: 
            0 0 20px rgba(255, 255, 255, 0.4),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }


        .button-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          animation: buttonGlow 3s ease-in-out infinite;
          pointer-events: none;
        }


        @keyframes buttonGlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20%, 20%); }
        }


        .cta-secondary {
          background: transparent;
          color: #ffffff;
          border: 2px solid #ffffff;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);
        }


        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 0 30px rgba(255, 255, 255, 0.5),
            inset 0 0 30px rgba(255, 255, 255, 0.3);
        }


        .button-text {
          position: relative;
          z-index: 2;
        }


        .button-icon {
          font-size: 1.3rem;
          position: relative;
          z-index: 2;
        }


        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          padding: 3rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-left: none;
          border-right: none;
          position: relative;
        }


        .hero-stats::before,
        .hero-stats::after {
          content: '';
          position: absolute;
          top: 0;
          width: 50px;
          height: 100%;
          background: linear-gradient(90deg, #ffffff, transparent);
          animation: scanBeam 3s ease-in-out infinite;
        }


        .hero-stats::before {
          left: 0;
        }


        .hero-stats::after {
          right: 0;
          transform: scaleX(-1);
        }


        @keyframes scanBeam {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }


        .stat-item {
          text-align: center;
        }


        .stat-number {
          font-family: 'Teko', sans-serif;
          font-size: 4rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.8),
            0 0 40px rgba(255, 255, 255, 0.5);
          animation: numberGlow 2s ease-in-out infinite;
        }


        @keyframes numberGlow {
          0%, 100% { 
            text-shadow: 
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 255, 255, 0.5);
          }
          50% { 
            text-shadow: 
              0 0 30px rgba(255, 255, 255, 1),
              0 0 60px rgba(255, 255, 255, 0.7);
          }
        }


        .stat-label {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #808080;
          letter-spacing: 0.2em;
          margin-top: 0.5rem;
        }


        .stat-divider {
          width: 2px;
          height: 60px;
          background: linear-gradient(180deg, transparent, #ffffff, transparent);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }


        .hero-gradient-orb {
          position: absolute;
          top: 20%;
          right: 10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          filter: blur(100px);
          animation: orbFloat 8s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }


        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, -50px) scale(1.1); }
        }


        @media (max-width: 768px) {
          .hero-cta {
            flex-direction: column;
            align-items: stretch;
          }


          .cta-primary,
          .cta-secondary {
            width: 100%;
            justify-content: center;
          }


          .hero-stats {
            flex-direction: column;
            gap: 2rem;
          }


          .stat-divider {
            width: 60px;
            height: 2px;
          }
        }
      `}</style>
    </section>
  );
};


export default HeroSection;