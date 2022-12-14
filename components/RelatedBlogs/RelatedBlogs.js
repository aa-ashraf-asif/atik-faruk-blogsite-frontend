import Image from "next/image";
import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";

const RelatedBlogs = ({ blogs }) => {
  return (
    <Row className="justify-content-center">
      {blogs.map((blog) => (
        <Col key={blog.id} lg="4" className="mb-5">
          <Card className="blog border-0 shadow">
            {/* blog cover */}
            <Link href={`/blogs/${blog.id}`} className="text-decoration-none">
              <Card.Header className="blog__header bg-white p-0">
                {blog.cover ? (
                  // actual blog cover
                  <>
                    {/* blog cover background */}
                    <Image
                      className="blog__cover-bg"
                      src={blog.cover}
                      alt={blog.title}
                      title={blog.title}
                      fill="true"
                      sizes="(min-width: 992px) 60vw, (min-width: 1400px) 50vw, 90vw"
                    />
                    {/* blog cover */}
                    <div className="blog__cover-container">
                      <Image
                        className="blog__cover card-img-top"
                        src={blog.cover}
                        alt={blog.title}
                        title={blog.title}
                        fill
                        sizes="(min-width: 992px) 60vw, (min-width: 1400px) 50vw, 90vw"
                      />
                    </div>
                  </>
                ) : (
                  // alternative blog cover
                  <div className="blog__cover-container p-1">
                    <h2 className="card-title h-100 d-flex align-items-center fw-semibold text-dark opacity-25">
                      {blog.title}
                    </h2>
                  </div>
                )}
              </Card.Header>
            </Link>

            {/* blog contents */}
            <Card.Body>
              {/* blog title */}
              <Link href={`/blogs/${blog.id}`} className="text-decoration-none">
                <h2 className="blog__title card-title text-black fs-5 fw-semibold mb-0">
                  {blog.title}
                </h2>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default RelatedBlogs;
