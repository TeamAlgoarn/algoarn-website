// src/components/ui/input.tsx
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-algoarnAqua focus:ring-1 focus:ring-algoarnAqua ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
