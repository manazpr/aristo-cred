import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  as: string;

  children: React.ReactNode;
}

const Anchor = styled("a")`
  display: block;
  padding-top: 0.425rem;
  padding-bottom: 0.425rem;
  color: rgba(0, 0, 0, 0.3);
  text-decoration: none !important;

  &:hover {
    color: rgba(0, 0, 0, 0.8) !important;
  }

  &.is-active {
    color: rgba(0, 0, 0, 0.8);
  }
`;

const NavLink = ({ href, as, children }: NavLinkProps) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <Link href={href} as={as} passHref>
      <Anchor>
        
        {children}
      </Anchor>
    </Link>
  );
};

export default NavLink;
