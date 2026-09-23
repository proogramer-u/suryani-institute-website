import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "editorial";
type ButtonProps = ComponentProps<"button"> & { variant?: ButtonVariant };
type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: ButtonVariant };

function buttonClassName(variant: ButtonVariant = "primary") { return `button button--${variant}`; }

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={`${buttonClassName(variant)}${className ? ` ${className}` : ""}`} {...props} />;
}

export function ButtonLink({ className, variant, ...props }: ButtonLinkProps) {
  return <Link className={`${buttonClassName(variant)}${className ? ` ${className}` : ""}`} {...props} />;
}
