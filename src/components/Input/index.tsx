import clsx from "clsx";
import { useId } from "react";

type InputProps = {
  labelText: string;
  type: "email" | "password" | "text";
} & React.ComponentProps<"input">;
export const Input = ({ type, labelText, ...props }: InputProps) => {
  const inputClasses =
    "bg-amber-50 outline-0 px-3 py-1.5 border-2 border-gray-300 rounded-xl";

  const id = useId();
  return (
    <div>
      <label className="block ml-2 mb-1 text-sm" htmlFor={id}>
        {labelText}
      </label>
      <input
        {...props}
        type={type}
        className={clsx(inputClasses, props.className)}
        id={id}
      />
    </div>
  );
};
