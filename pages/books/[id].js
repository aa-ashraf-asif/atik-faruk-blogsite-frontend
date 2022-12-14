import Layout from "@/components/Layout/Layout";
import { FRONTEND_URL } from "config";
import { htmlToText } from "html-to-text";
import { getBook } from "lib/api";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { HiArrowRight } from "react-icons/hi";
import moment from "moment";
import "moment/locale/bn-bd";
moment.locale("bn-bd");

const BookPreview = ({ book }) => {
  return (
    <Layout
      title={`${book.title} - আতিক ফারুক`}
      description={book.content && htmlToText(book.content.html).slice(0, 170)}
      type="book"
      url={`${FRONTEND_URL}/books/${book.id}`}
      image={book.cover && book.cover}
    >
      <Container className="book-preview my-5">
        <Row className="justify-content-center align-items-center">
          {/* book preview cover */}
          <Col lg="4" className="pe-lg-5 mb-4 mb-lg-0">
            <div className="book-preview__header shadow rounded mx-auto">
              {book.cover ? (
                <Image
                  className="book-preview__cover rounded"
                  src={book.cover}
                  alt={book.title}
                  name={book.title}
                  fill
                  sizes="(min-width: 992px) 30vw, 50vw"
                />
              ) : (
                <h1 className="h-100 d-flex align-items-center display-3 fw-semibold text-dark opacity-25 p-3">
                  {book.title}
                </h1>
              )}
            </div>
          </Col>

          {/* book preview contents */}
          <Col lg="8">
            {/* book info */}
            <p className="book-preview__info mb-0">
              <small>{moment(book.date).format("LL")}</small>
            </p>
            {/* book title */}
            <h1 className="book-preview__title text-black fs-3 fw-semibold mb-4">
              {book.title}
            </h1>
            {/* book content */}
            {book.content && (
              <div
                className="book-preview__content mb-3"
                dangerouslySetInnerHTML={{
                  __html: book.content.html,
                }}
              />
            )}

            {/* book purchase button */}
            {book.purchase && (
              <a
                className="btn px-0 fw-bold"
                href={book.purchase}
                rel="noreferrer"
                target="_blank"
              >
                বইটি কিনুন <HiArrowRight />
              </a>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default BookPreview;

// getting a single book
export async function getServerSideProps({ params: { id } }) {
  const book = await getBook(id);

  return {
    props: { book },
  };
}
