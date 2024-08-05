import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const HoverSection = ({ children, sx, ...props }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);;

  // Update mouse position when the mouse moves
  const handleMouseMove = (ev) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ev.clientX - rect.left,
        y: ev.clientY - rect.top
      });
    }
  };

  // Set hover state when mouse enters or leaves
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        ...sx, // Apply passed sx styles
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(
            circle ${isHovering ? '600px' : '0px'} at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0) 100%
          )`,
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease, background 0.3s ease',
          pointerEvents: 'none',
        },
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default HoverSection;
