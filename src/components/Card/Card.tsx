import clsx from "clsx";

type CardsProps = {
  children: React.ReactNode;
} & React.ComponentProps<"div">;

export const Card = ({ children, ...props }: CardsProps) => {
  const patternClass = "p-3 rounded-xl shadow shadow-neutral-950";
  return <div className={clsx(patternClass, props.className)}>{children}</div>;
};
