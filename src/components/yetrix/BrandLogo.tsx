import { Link } from "@tanstack/react-router";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
};

export function BrandLogo({ className = "", imageClassName = "h-10" }: BrandLogoProps) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img
        src="/yetrix-logo-wordmark.png"
        alt="Yetrix Technologies"
        className={`${imageClassName} w-auto object-contain`}
        draggable={false}
      />
    </Link>
  );
}
