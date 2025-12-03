// src/components/ui/textarea.tsx
import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-algoarnAqua focus:ring-1 focus:ring-algoarnAqua min-h-[120px] ${className}`}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
