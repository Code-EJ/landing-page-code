import React from "react";
type ImagemProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
};

const Imagem: React.FC<ImagemProps> = ({
  src,
  alt,
  width,
  height,
  className,
  style,
}) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={`rounded-lg shadow-lg ${className ?? ""}`}
    style={style}
    loading="lazy"
  />
);

export default Imagem;
