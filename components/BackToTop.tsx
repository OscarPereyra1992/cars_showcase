'use client';

import { CustomButton } from ".";
import { useEffect, useState } from 'react';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);
  
    // Función para desplazarse hacia arriba
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const buttonStyle = {
        position: 'fixed',
        bottom: '20px', // Ajusta la distancia desde la parte inferior
        right: '20px', // Ajusta la distancia desde el lado derecho
        zIndex: 999, // Asegura que el botón esté en la parte superior
      };
    
  
    return (
      showButton && (
        <CustomButton
          title="↑"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white fixed bottom-4 right-4"
          handleClick={scrollToTop}
          
          
        />
      )
    );
  };
  
  export default BackToTop;