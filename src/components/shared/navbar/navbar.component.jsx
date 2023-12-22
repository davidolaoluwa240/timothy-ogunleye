// Hooks
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useStaticData } from "../../../hooks";

// Components
import { Fragment } from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link as NextUILink,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { NavLink, Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

// Styles
import "./navbar.styles.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { NAVBAR_ITEMS: navbarItems } = useStaticData();

  // Rendered Navbar Items
  const renderedNavbarItems = navbarItems.map(({ id, name, items, to }) => (
    <Fragment key={id}>
      {!items && (
        <NavbarItem isActive={pathname === to}>
          <NextUILink
            className="uppercase text-primary-foreground"
            as={NavLink}
            to={to}
          >
            {name}
          </NextUILink>
        </NavbarItem>
      )}

      {items && (
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 text-primary-foreground text-base uppercase bg-transparent data-[hover=true]:bg-transparent gap-1"
                endContent={<MdKeyboardArrowDown className="w-6 h-6" />}
                radius="sm"
                variant="light"
              >
                {name}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            {items?.map(({ id, name, to }) => (
              <DropdownItem key={id} as="a" href={to} target="_blank">
                {name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      )}
    </Fragment>
  ));

  // Rendered Navbar Items Mobile
  const renderedNavbarItemsMobile = navbarItems.map(
    ({ id, name, items, to }) => (
      <Fragment key={id}>
        {!items && (
          <NavbarMenuItem isActive={pathname === to}>
            <NextUILink
              className="uppercase text-primary-foreground w-full"
              as={NavLink}
              to={to}
            >
              {name}
            </NextUILink>
          </NavbarMenuItem>
        )}

        {items && (
          <Dropdown>
            <NavbarMenuItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 text-primary-foreground text-base uppercase bg-transparent data-[hover=true]:bg-transparent gap-1"
                  endContent={<MdKeyboardArrowDown className="w-6 h-6" />}
                  radius="sm"
                  variant="light"
                >
                  {name}
                </Button>
              </DropdownTrigger>
            </NavbarMenuItem>
            <DropdownMenu>
              {items?.map(({ id, name, to }) => (
                <DropdownItem key={id} as="a" href={to} target="_blank">
                  {name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        )}
      </Fragment>
    )
  );

  return (
    <NextUINavbar
      className="bg-primary"
      classNames={{ wrapper: "p-4 lg:p-6 max-w-[1408px]" }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link to="/">
          <h6 className="text-2xl font-black navbar-brand">Timothy Ogunleye</h6>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden lg:flex gap-9" justify="end">
        {renderedNavbarItems}
      </NavbarContent>

      <NavbarContent className="flex lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-primary-foreground"
        />
      </NavbarContent>
      <NavbarMenu className="bg-primary/90 px-4 pt-4">
        {renderedNavbarItemsMobile}
      </NavbarMenu>
    </NextUINavbar>
  );
};
