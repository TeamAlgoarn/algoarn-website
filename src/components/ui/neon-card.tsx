// src/components/ui/neon-card.tsx
"use client";

import React from "react";

export interface NeonCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NeonCard: React.FC<NeonCardProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={[
        "glass-card neon-card",
        // base glass / neon look
        "border border-white/10 bg-white/5",
        "backdrop-blur-xl rounded-2xl",
        "shadow-[0_0_0_1px_rgba(148,163,184,0.18),0_30px_80px_rgba(15,23,42,0.9)]",
        // interactive behaviour
        "group hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]",
        "transition-transform transition-shadow duration-300",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default NeonCard;




// // // src/components/ui/neon-card.tsx
// import React from "react";

// export interface NeonCardProps extends React.HTMLAttributes<HTMLDivElement> {}

// export const NeonCard: React.FC<NeonCardProps> = ({
//   className = "",
//   children,
//   ...props
// }) => {
//   return (
//     <div
//       className={`glass-card neon-card ${className}`}
//       {...props}
//     >
//       {children}
//     </div>
//   );
// };





