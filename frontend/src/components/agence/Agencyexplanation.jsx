import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


const AgencyExplanation = () => {
  const canvasRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;


    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;


    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 3;


    let angle = 0;


    function drawNetwork() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);


      // Central node
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 30;
      ctx.shadowColor = '#ffffff';
      ctx.fill();
      ctx.shadowBlur = 0;


      // Satellite nodes
      for (let i = 0; i < 4; i++) {
        const nodeAngle = (angle + (Math.PI / 2) * i);
        const x = centerX + Math.cos(nodeAngle) * radius;
        const y = centerY + Math.sin(nodeAngle) * radius;


        // Connection line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(angle + i) * 0.2})`;
        ctx.lineWidth = 2;
        ctx.stroke();


        // Node
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fillStyle = '#1a1a1a';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Inner glow
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + Math.sin(angle + i) * 0.3})`;
        ctx.fill();
      }


      angle += 0.01;
      requestAnimationFrame(drawNetwork);
    }


    drawNetwork();


    const handleResize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };


    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const items = [
    { icon: '📦', text: 'Distribution & logistics', delay: 0.2 },
    { icon: '📢', text: 'Marketing & promotions', delay: 0.3 },
    { icon: '🤝', text: 'Retail partnerships', delay: 0.4 },
    { icon: '⚖️', text: 'Local compliance & operations', delay: 0.5 }
  ];


  return (
    <section className="agency-explanation-dark">
      <div className="tech-border top"></div>
      
      <div className="explanation-container">
        <motion.div 
          className="section-badge"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-line"></span>
          <span className="badge-text">WHAT WE DO</span>
          <span className="badge-line"></span>
        </motion.div>


        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          WHAT "AGENCY" MEANS
          <br />
          <span className="title-highlight">AT COCA-COLA</span>
        </motion.h2>


        <div className="explanation-grid">
          <motion.div 
            className="explanation-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="content-box">
              <div className="box-corner tl"></div>
              <div className="box-corner tr"></div>
              <div className="box-corner bl"></div>
              <div className="box-corner br"></div>


              <p className="intro-text">
                Coca-Cola operates through a <span className="text-glow">global system</span> of 
                agencies and bottling partners
              </p>


              <div className="handles-section">
                <h3 className="handles-title">
                  <span className="title-icon">▶</span>
                  AGENCIES HANDLE:
                </h3>
                
                <div className="handles-list">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      className="handle-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    >
                      <span className="item-icon">{item.icon}</span>
                      <span className="item-text">{item.text}</span>
                      <div className="item-line"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>


          <motion.div 
            className="network-visual-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="visual-box">
              <canvas ref={canvasRef} className="network-canvas"></canvas>
              <div className="visual-label">NETWORK TOPOLOGY</div>
            </div>
          </motion.div>
        </div>


        <motion.div 
          className="tagline-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="tagline-indicator"></div>
          <p className="tagline-text">
            WE DON'T JUST SELL BEVERAGES—
            <span className="tagline-highlight">WE BUILD ECOSYSTEMS</span>
          </p>
          <div className="tagline-scan"></div>
        </motion.div>
      </div>


      <div className="tech-border bottom"></div>


      <style jsx>{`
        .agency-explanation-dark {
          background: #0a0a0a;
          padding: 8rem 2rem;
          position: relative;
          overflow: hidden;
        }


        .tech-border {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            #ffffff 50%, 
            transparent 100%
          );
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }


        .tech-border.top { top: 0; }
        .tech-border.bottom { bottom: 0; }


        .explanation-container {
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }


        .section-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }


        .badge-line {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffffff);
        }


        .badge-line:last-child {
          background: linear-gradient(90deg, #ffffff, transparent);
        }


        .badge-text {
          font-family: 'Rajdhani', monospace;
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.3em;
        }


        .section-title {
          font-family: 'Teko', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 5rem;
          line-height: 1.1;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }


        .title-highlight {
          color: #ffffff;
          text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.8),
            0 0 40px rgba(255, 255, 255, 0.5);
          animation: titlePulse 3s ease-in-out infinite;
        }


        @keyframes titlePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }


        .explanation-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 5rem;
        }


        .content-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 3rem;
          position: relative;
          backdrop-filter: blur(10px);
        }


        .box-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #ffffff;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }


        .box-corner.tl {
          top: -1px;
          left: -1px;
          border-right: none;
          border-bottom: none;
        }


        .box-corner.tr {
          top: -1px;
          right: -1px;
          border-left: none;
          border-bottom: none;
        }


        .box-corner.bl {
          bottom: -1px;
          left: -1px;
          border-right: none;
          border-top: none;
        }


        .box-corner.br {
          bottom: -1px;
          right: -1px;
          border-left: none;
          border-top: none;
        }


        .intro-text {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.8rem;
          line-height: 1.6;
          color: #d0d0d0;
          margin-bottom: 3rem;
          font-weight: 500;
        }


        .text-glow {
          color: #ffffff;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }


        .handles-section {
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          padding-top: 2rem;
        }


        .handles-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          letter-spacing: 0.1em;
        }


        .title-icon {
          font-size: 1rem;
          animation: blink 2s infinite;
        }


        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }


        .handles-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }


        .handle-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.5);
          border-left: 3px solid #ffffff;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }


        .handle-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }


        .handle-item:hover::before {
          left: 100%;
        }


        .item-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
        }


        .item-text {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.1rem;
          color: #ffffff;
          font-weight: 600;
          flex: 1;
        }


        .item-line {
          width: 30px;
          height: 2px;
          background: #ffffff;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
        }


        .network-visual-container {
          position: relative;
        }


        .visual-box {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 2rem;
          position: relative;
          aspect-ratio: 1;
        }


        .network-canvas {
          width: 100%;
          height: 100%;
        }


        .visual-label {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Rajdhani', monospace;
          font-size: 0.8rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.2em;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid #ffffff;
        }


        .tagline-box {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%);
          border: 2px solid #ffffff;
          padding: 3rem 4rem;
          position: relative;
          overflow: hidden;
          clip-path: polygon(30px 0, 100% 0, calc(100% - 30px) 100%, 0 100%);
        }


        .tagline-indicator {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5px;
          background: #ffffff;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
          animation: indicatorPulse 2s ease-in-out infinite;
        }


        @keyframes indicatorPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }


        .tagline-text {
          font-family: 'Teko', sans-serif;
          font-size: clamp(1.8rem, 3vw, 3rem);
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin: 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1.3;
        }


        .tagline-highlight {
          color: #ffffff;
          display: block;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
        }


        .tagline-scan {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffffff, transparent);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          animation: scan 3s linear infinite;
        }


        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100px); }
        }


        @media (max-width: 1024px) {
          .explanation-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }


          .visual-box {
            max-width: 500px;
            margin: 0 auto;
          }
        }


        @media (max-width: 768px) {
          .agency-explanation-dark {
            padding: 5rem 1.5rem;
          }


          .content-box {
            padding: 2rem 1.5rem;
          }


          .tagline-box {
            padding: 2rem 1.5rem;
          }


          .badge-line {
            width: 50px;
          }
        }
      `}</style>
    </section>
  );
};


export default AgencyExplanation;