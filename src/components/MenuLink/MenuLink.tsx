import Link from "next/link";

import { ReactNode } from "react";

type MenuLinkProps = {
  icon: ReactNode;
  content: string;
};

export const MenuLink = ({ content, icon }: MenuLinkProps) => {
  return (
    <li className="border-l-4 border-l-transparent hover:border-l-4 hover:border-l-blue-500 transition duration-200 hover:bg-gray-200">
      <Link href={"/"} className="flex gap-4 p-4 font-bold text-lg">
        {icon} {content}
      </Link>
    </li>
  );
};
