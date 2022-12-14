import Image from "next/image";
import Link from "next/link";
import { Card } from "react-bootstrap";
import { HiArrowRight } from "react-icons/hi";
import moment from "moment";
import "moment/locale/bn-bd";
import { CategoryModifier } from "lib/category";
moment.locale("bn-bd");

const Blog = ({ id, cover, title, category, content, date }) => {
  return (
    <Card className="blog border-0 shadow">
      {/* blog cover */}
      <Link href={`/blogs/${id}`} className="text-decoration-none">
        <Card.Header className="blog__header bg-white p-0">
          {cover ? (
            // actual blog cover
            <>
              {/* blog cover background */}
              <Image
                className="blog__cover-bg"
                src={cover}
                alt={title}
                title={title}
                fill="true"
                sizes="(min-width: 992px) 60vw, (min-width: 1400px) 50vw, 90vw"
              />
              {/* blog cover */}
              <div className="blog__cover-container">
                <Image
                  className="blog__cover card-img-top"
                  src={cover}
                  alt={title}
                  title={title}
                  fill
                  sizes="(min-width: 992px) 60vw, (min-width: 1400px) 50vw, 90vw"
                />
              </div>
            </>
          ) : (
            // alternative blog cover
            <div className="blog__cover-container p-3">
              <h2 className="card-title h-100 d-flex align-items-center display-3 fw-semibold text-dark opacity-25">
                {title}
              </h2>
            </div>
          )}
        </Card.Header>
      </Link>

      {/* blog contents */}
      <Card.Body>
        {/* blog title */}
        <Link href={`/blogs/${id}`} className="text-decoration-none">
          <h2 className="blog__title card-title text-black fs-3 fw-semibold mb-0">
            {title}
          </h2>
        </Link>
        {/* blog info */}
        <Card.Text className="blog__info">
          <small>
            {CategoryModifier(category)} | {moment(date).format("LL")}
          </small>
        </Card.Text>
        {/* blog content */}
        {content || cover ? (
          <>
            {content && (
              <div
                className="blog__content"
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
            )}
          </>
        ) : (
          <p className="blog__content">ব্লগটি শিঘ্রই সম্পাদিত হচ্ছে...</p>
        )}
      </Card.Body>

      <Card.Footer className="d-flex justify-content-between align-items-center bg-white border-0">
        <Link href={`/blogs/${id}`} className="btn px-0 fw-bold">
          পুরোটা পড়ুন <HiArrowRight />
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Blog;
