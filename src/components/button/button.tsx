import { cn } from "@/lib/utils";
import styles from "./button.module.scss";

interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const CustomButton = (props: CustomButtonProps) => {
  return (
    <button {...props} className={cn(styles.button, props.className)}>
      {props.children}
    </button>
  );
};
