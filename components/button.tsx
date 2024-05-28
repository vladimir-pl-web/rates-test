import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const CustomButton = (props: CustomButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'btn-common bg-alice-blue hover:bg-primary hover:text-light-blue active:animate-buttonPress',
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};