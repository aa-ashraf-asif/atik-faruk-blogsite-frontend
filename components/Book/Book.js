
import Link from "next/link";
import { Card, Image } from "react-bootstrap";
import moment from "moment";
import "moment/locale/bn-bd";
moment.locale("bn-bd");

const Book = ({ id, cover, title, date }) => {
  return (
    <Card className="book border-0">
      {/* book cover */}
      <Link href={`/books/${id}`} className="text-decoration-none">
          <Card.Header className="book__header bg-white border-0 p-0 shadow rounded">
            {cover ? (
              // actual book cover
              <Image
                className="book__cover card-img-top rounded"
                src={cover}
                alt={title}
                title={title}
                fill="true"
                sizes="(min-width: 992px) 20vw, (min-width: 540px) 30vw, 50vw"
              />
            ) : (
              // alternative book cover
              <h2 className="card-title h-100 d-flex align-items-center display-5 fw-semibold text-dark opacity-25 p-3">
                {title}
              </h2>
            )}
          </Card.Header>
      </Link>

      {/* book description */}
      <Card.Body className="px-0">
        {/* book info */}
        <Card.Text className="book__info mb-0">
          <small>{moment(date).format("LL")}</small>
        </Card.Text>
        {/* book title */}
        <Link href={`/books/${id}`} className="text-decoration-none">
          <h2 className="book__title card-title fs-4 text-black fw-semibold mb-0">
            {title}
          </h2>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Book