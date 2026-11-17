import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useSite } from "../i18n/lang";

type Variant = "primary" | "secondary" | "light";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium leading-tight transition-colors duration-200 text-center";

const variants: Record<Variant, string> = {
  // branco sobre terracota: 5,8:1
  primary: "bg-terracota text-white hover:bg-cacau",
  // cacau sobre creme: 13,5:1
  secondary: "border-2 border-cacau text-cacau hover:bg-cacau hover:text-creme",
  // cacau sobre creme, para fundos escuros
  light: "bg-creme text-cacau hover:bg-bege",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  icon?: ReactNode;
  external?: boolean;
};

export function Button({ href, variant = "primary", icon, external, className = "", children, ...rest }: Props) {
  const { t } = useSite();
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...externalProps} {...rest}>
      {icon}
      <span>{children}</span>
      {external && <span className="sr-only"> {t.newTab}</span>}
    </a>
  );
}
