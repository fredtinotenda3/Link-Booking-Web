// components/Logo.tsx - Updated with green theme
import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  showTagline?: boolean;
}

export const Logo = ({ 
  width = 420, 
  height = 80, 
  className = "",
  showTagline = true 
}: LogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 420 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Link Opticians - Precision Vision"
    >
      {/* Eye Icon - Updated to use green theme */}
      <g transform="translate(0,10)">
        <title>Link Opticians Logo</title>
        <desc>Professional optometry logo with eye icon and brand name</desc>
        <path
          d="M40 10C22 10 8 25 4 30C8 35 22 50 40 50C58 50 72 35 76 30C72 25 58 10 40 10Z"
          stroke="#24ae7c"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="40" cy="30" r="8" fill="#24ae7c" />  {/* Changed from #2FA4A9 to #24ae7c */}
        <circle cx="40" cy="30" r="4" fill="#0B3C49" />
      </g>

      {/* Brand Name */}
      <text
        x="95"
        y="38"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill="#0B3C49"
        letterSpacing="0.5"
      >
        Link Opticians
      </text>

      {/* Conditional Tagline */}
      {showTagline && (
        <text
          x="95"
          y="60"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="14"
          fontWeight="400"
          fill="#4B6F7A"
          letterSpacing="0.4"
        >
          Precision Vision
        </text>
      )}
    </svg>
  );
};