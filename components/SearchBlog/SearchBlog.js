import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import moment from "moment";
import "moment/locale/bn-bd";
moment.locale("bn-bd");

const SearchBlog = ({ blogs, display }) => {
  // modal hide and show actions
  const [show, setShow] = useState(false);

  const [searchedBlogs, setSearchedBlogs] = useState([]);

  const handleSearch = (e) => {
    const keywords = e.target.value;
    const newSearchedBlogs = blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(keywords.toLowerCase());
    });

    if (keywords === "") {
      setSearchedBlogs([]);
    } else {
      setSearchedBlogs(newSearchedBlogs);
    }
  };

  return (
    <>
      {/* open search button */}
      <a
        className={`btn bg-dark bg-opacity-10 text-start ${display}`}
        onClick={() => {
          setShow(true);
          setSearchedBlogs([]);
        }}
      >
        <BiSearch className="me-2 fs-3" />{" "}
        <span className="text-muted">অনুসন্ধান করুন</span>
      </a>

      {/* search content */}
      <Modal show={show} onHide={() => setShow(false)} className="search-modal">
        {/* modal heading */}
        <Modal.Header closeButton>
          {/* search bar */}
          <Form
            className="d-flex bg-white border rounded w-100 me-2"
            onClick={() => setShow(true)}
          >
            <Button variant="light" disabled>
              <BiSearch className="fs-3" />
            </Button>
            <Form.Control
              autoFocus
              type="search"
              placeholder="অনুসন্ধান করুন"
              aria-label="Search"
              className="border-0"
              onChange={handleSearch}
            />
          </Form>
        </Modal.Header>

        {/* modal content */}
        <Modal.Body>
          <div className="d-flex flex-column">
            {/* search results */}
            {searchedBlogs.slice(0, 3).map((blog) => (
              <div key={blog.id}>
                <Link
                  href={`/blogs/${blog.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Row className="px-0 py-3 border-bottom">
                    <Col xs="2">
                      {blog.cover ? (
                        <div
                          className="w-100 h-100 border rounded"
                          style={{
                            position: "relative",
                            aspectRatio: "2/1",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src={blog.cover}
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "cover",
                            }}
                            alt={blog.title}
                            fill
                            sizes="(min-width: 992px) 60vw, 100vw"
                          />
                        </div>
                      ) : (
                        <div className="w-100 h-100 border rounded"></div>
                      )}
                    </Col>

                    <Col xs="10">
                      {/* search modal title */}
                      <h6 className="search-modal__title text-black mb-0">
                        {blog.title}
                      </h6>
                      {/* search modal info */}
                      <small className="search-modal__info text-muted">
                        {blog.category} | {moment(blog.createdAt).format("LL")}
                      </small>
                    </Col>
                  </Row>
                </Link>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SearchBlog;
