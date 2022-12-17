import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { GrMenu, GrClose } from "react-icons/gr";
import { BiHomeAlt, BiBookAlt, BiEnvelopeOpen } from "react-icons/bi";
import Image from "next/image";
import SearchBlog from "../SearchBlog/SearchBlog";

const Header = ({ banner }) => {
  const router = useRouter();

  const [click, setClick] = useState(false);

  const activeNav = (path) =>
    router.pathname === path ? "fw-bold text-black" : "fw-semibold";

  return (
    <>
      {/* navbar heading */}
      <div
        className="d-none d-lg-block text-center pt-3 "
        style={{ zIndex: "2" }}
      >
        <Link href="/" className="text-decoration-none fs-1 text-black">
          আতিক ফারুক
        </Link>
        <p className="fst-italic">লেখালেখি</p>
      </div>

      {/* navbar */}
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="white"
        variant="white"
        className="navbar border-top border-bottom shadow-sm"
      >
        <Container>
          {/* search */}
          <SearchBlog device="small" />

          {/* logo */}
          <Link
            href="/"
            className="nav-link fs-3 fw-semibold d-block d-lg-none p-0"
          >
            আতিক ফারুক
          </Link>

          {/* toggler */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setClick(!click)}
            className="text-black fs-3"
          >
            {click ? <GrClose /> : <GrMenu />}
          </Navbar.Toggle>

          {/* menu */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto text-center gap-2">
              <hr className="border-secondary mb-1" />
              {/* homepage */}
              <Link href="/" className={`nav-link ${activeNav("/")}`}>
                <BiHomeAlt /> মূলপাতা
              </Link>
              <hr className="border-secondary my-1" />
              {/* books page */}
              <Link href="/books" className={`nav-link ${activeNav("/books")}`}>
                <BiBookAlt /> আমার বই
              </Link>
              <hr className="border-secondary my-1" />
              {/* about page */}
              <Link href="/about" className={`nav-link ${activeNav("/about")}`}>
                <BiEnvelopeOpen /> পাঠকের প্রতি
              </Link>
              <hr className="border-0 m-0" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* hero */}
      {router.pathname === "/" && (
        <div className="hero">
          {banner && (
            <Image
              src={banner.cover.url}
              alt="atik faruk website banner"
              title="atik faruk website banner"
              className="hero__img img-fluid"
              fill
              sizes="100vw"
            />
          )}
        </div>
      )}
    </>
  );
};

export default Header;
