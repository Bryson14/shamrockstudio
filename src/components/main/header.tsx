import Link from "next/link";
import { Flex } from "@aws-amplify/ui-react";

export default function MainHeader() {
  return (
    // A nav bar with semantically right nav bar with li items for other pages, but all horizontal in a row

    <Flex direction="row" as="nav" style={{}}>
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          MY website
        </Link>
      </div>
      <Flex
        as="ul"
        direction={"row"}
        className="flex items-center"
        display={"inline-block"}
      >
        <li>
          <Link href="/about" className="text-gray-900">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-gray-900">
            Services
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-gray-900">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-900">
            Contact
          </Link>
        </li>
      </Flex>
    </Flex>
  );
}
