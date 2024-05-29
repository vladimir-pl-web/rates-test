import { cn } from "@/lib/utils";
import styles from "./typorgaphy.module.scss";

export function TypographyH1({ children, classNames }: IHeaderProps) {
  return <h1 className={cn(styles.h1, classNames)}>{children}</h1>;
}

export function TypographyH2({ children, classNames }: IHeaderProps) {
  return <h2 className={cn(styles.h2, classNames)}>{children}</h2>;
}

export function TypographyH3({ children, classNames }: IHeaderProps) {
  return <h3 className={cn(styles.h3, classNames)}>{children}</h3>;
}

export function TypographyP({ children, classNames }: IHeaderProps) {
  return <p className={cn(styles.paragraph, classNames)}>{children}</p>;
}
