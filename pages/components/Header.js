import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link as="/post/1" href="/post/[id]">
          <a>First Post</a>
        </Link>
      </li>
      <li>
        <Link as="/post/2" href="/post/[id]">
          <a>Second Post</a>
        </Link>
      </li>
    </ul>
  );
};

export default Header;
