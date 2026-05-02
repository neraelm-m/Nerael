'use client';

interface TechBackgroundProps {
  opacity?: number;
  imagePath?: string; // <--- Nueva propiedad para la ruta de la imagen
}

export default function TechBackground({ 
  opacity = 0.15, 
  imagePath = "/assets/images/wallpaper4.png" // Imagen por defecto
}: TechBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0 grayscale contrast-[1.2] brightness-[0.7]"
        style={{ 
          backgroundImage: `url('${imagePath}')`, // <--- Ahora es dinámica
          backgroundSize: "550px",
          backgroundRepeat: "repeat",
          opacity: opacity 
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
    </div>
  );
}