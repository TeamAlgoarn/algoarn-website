// // src/components/ui/button.tsx
// import React from "react";

// type ButtonVariant = "primary" | "outline" | "ghost";
// type ButtonSize = "sm" | "md" | "lg";

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: ButtonVariant;
//   size?: ButtonSize;
// }

// function baseClasses(variant: ButtonVariant, size: ButtonSize) {
//   const variants: Record<ButtonVariant, string> = {
//     primary:
//       "bg-algoarnBlue hover:bg-algoarnAqua text-white neon-card border-transparent",
//     outline:
//       "border border-white/30 hover:border-algoarnAqua text-white hover:text-algoarnAqua bg-transparent",
//     ghost:
//       "text-white/80 hover:text-white bg-transparent hover:bg-white/5 border border-transparent",
//   };

//   const sizes: Record<ButtonSize, string> = {
//     sm: "px-3 py-1.5 text-xs",
//     md: "px-4 py-2 text-sm",
//     lg: "px-5 py-2.5 text-sm md:text-base",
//   };

//   return [
//     "inline-flex items-center justify-center rounded-full font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
//     variants[variant],
//     sizes[size],
//   ].join(" ");
// }

// export const Button: React.FC<ButtonProps> = ({
//   variant = "primary",
//   size = "md",
//   className = "",
//   children,
//   ...props
// }) => {
//   return (
//     <button
//       className={`${baseClasses(variant, size)} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };



import React from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

function baseClasses(variant: ButtonVariant, size: ButtonSize) {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-algoarnBlue hover:bg-algoarnAqua text-white neon-card border-transparent",
    outline:
      "border border-white/30 hover:border-algoarnAqua text-white hover:text-algoarnAqua bg-transparent",
    ghost:
      "text-white/80 hover:text-white bg-transparent hover:bg-white/5 border border-transparent",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-sm md:text-base",
  };

  return [
    "inline-flex items-center justify-center rounded-full font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
  ].join(" ");
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className = "", asChild = false, children, ...props },
    ref
  ) => {
    const btnClass = `${baseClasses(variant, size)} ${className}`.trim();

    // ✅ asChild renders the child (Link <a>) and merges className deterministically
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      const childClass = (child.props?.className ?? "").trim();

      // ✅ IMPORTANT: always "childClass + btnClass" in same order (server & client)
      const mergedClassName = `${childClass} ${btnClass}`.trim();

      return React.cloneElement(child, {
        ...props, // forward onClick, etc.
        className: mergedClassName,
      });
    }

    return (
      <button ref={ref} className={btnClass} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
