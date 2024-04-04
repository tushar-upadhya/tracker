"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const Navbar = () => {
  const pathName = usePathname();

  const link = [
    { label: "DashBoard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex flex-col space-y-6 border-b mb-5 px-5 h-14 items-center">
      <ul className="flex space-x-6">
        <Link href={"/"}>
          <AiFillBug />
        </Link>
        {link.map((linkItem) => (
          <li key={linkItem.href}>
            <Link
              href={linkItem.href}
              className={classnames({
                "text-zinc-400": linkItem.href === pathName,
                "text-zinc-200": linkItem.href !== pathName,
                "hover:text-zinc-50 transition-colors": true,
              })}
            >
              {linkItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
