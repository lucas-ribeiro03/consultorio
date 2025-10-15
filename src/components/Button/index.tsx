import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  theme: "default" | "confirm" | "cancel";
  type: "submit" | "button";
} & React.ComponentProps<"button">;

export const Button = ({ children, type, theme, ...props }: ButtonProps) => {
  const buttonClasses =
    "        text-lg rounded-full border-0 cursor-pointer py-3 px-2";

  const buttonThemeMap = {
    default: "bg-gray-500 hover:bg-gray-400 transition duration-200",
    confirm:
      "bg-blue-500 hover:bg-blue-700 transition duration-200 text-amber-50",
    cancel: "bg-red-500 hover:bg-red-700 transition duration-200 text-amber-50",
  };
  return (
    <button
      {...props}
      type={type}
      className={clsx(props.className, buttonClasses, buttonThemeMap[theme])}
    >
      {children}
    </button>
  );
};
