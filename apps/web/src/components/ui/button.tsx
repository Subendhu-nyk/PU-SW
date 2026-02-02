import * as React from "react";

// ---------------------------------------------------------------------------
// TYPES (TypeScript Concept)
// ---------------------------------------------------------------------------
// Define the button variant types
type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

// ButtonProps extends standard HTML button attributes
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

// ---------------------------------------------------------------------------
// HELPER FUNCTION
// ---------------------------------------------------------------------------
// Function to generate className based on variant and size
const getButtonClasses = (
  variant: ButtonVariant = "default",
  size: ButtonSize = "default",
  className?: string
): string => {
  // Base classes applied to all buttons
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  // Variant-specific classes
  const variantClasses: Record<ButtonVariant, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  // Size-specific classes
  const sizeClasses: Record<ButtonSize, string> = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  // Combine all classes
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ""}`.trim();
};

// ---------------------------------------------------------------------------
// BUTTON COMPONENT
// ---------------------------------------------------------------------------
// React.forwardRef allows parent components to access the button's DOM element
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={getButtonClasses(variant, size, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

// Display name for React DevTools
Button.displayName = "Button";

export { Button };
