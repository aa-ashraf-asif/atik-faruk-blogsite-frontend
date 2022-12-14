import Layout from "@/components/Layout/Layout";
import { FRONTEND_URL } from "config";
import { getBlog, getRelatedBlogs } from "lib/api";
import { Col, Container, Row } from "react-bootstrap";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import Image from "next/image";
import { htmlToText } from "html-to-text";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import RelatedBlogs from "@/components/RelatedBlogs/RelatedBlogs";
import moment from "moment";
import "moment/locale/bn-bd";
import { CategoryModifier } from "lib/category";
moment.locale("bn-bd");

const BlogPreview = ({ blog, relatedBlogs }) => {
  return (
    <Layout
      title={`${blog.title} - আতিক ফারুক`}
      description={blog.content && htmlToText(blog.content).slice(0, 170)}
      type="article"
      url={`${FRONTEND_URL}/blogs/${blog.id}`}
      image={blog.cover && blog.cover}
    >
      <section className="blog-preview">
        <div className="blog-preview__header border-bottom mb-4">
          {blog.cover ? (
            // blog preview actual cover
            <>
              {/* blog preview cover background */}
              <Image
                src={blog.cover}
                className="blog-preview__bg-img"
                alt={blog.title}
                fill
                sizes="100vw"
              />
              {/* blog preview cover */}
              <Container className="blog-preview__img-container">
                <Image
                  src={blog.cover}
                  className="blog-preview__img"
                  alt={blog.title}
                  fill
                  sizes="(min-width: 992px) 60vw, 100vw"
                />
              </Container>
            </>
          ) : (
            // blog preview alternative cover
            <>
              {/* blog preview cover */}
              <Container className="blog-preview__img-container d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-muted opacity-25">
                  {blog.title}
                </h1>
              </Container>
            </>
          )}
        </div>

        {/* blog preview contents */}
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="mb-5">
              {/* blog preview title */}
              <h1 className="blog-preview__title text-black fs-3 fw-semibold mb-0">
                {blog.title}
              </h1>
              {/* blog preview info */}
              <p className="blog-preview__info">
                <small>
                  {CategoryModifier(blog.category)} |{" "}
                  {moment(blog.createdAt).format("LL")}
                </small>
              </p>
              {/* blog preview content */}
              {blog.content || blog.cover ? (
                <>
                  {blog.content && (
                    <div
                      className="blog-preview__content mb-5"
                      dangerouslySetInnerHTML={{
                        __html: blog.content,
                      }}
                    />
                  )}
                </>
              ) : (
                <p className="blog-preview__content mb-5">
                  ব্লগটি শিঘ্রই সম্পাদিত হচ্ছে...
                </p>
              )}

              {/* blog preview interactions */}
              <div className="d-flex align-items-center gap-3 mb-5">
                {/* interaction title */}
                <span className="fs-5 fw-bold">শেয়ার করুন</span>
                {/* facebook share button */}
                <a className="btn bg-dark bg-opacity-10">
                  <FacebookShareButton url={`${FRONTEND_URL}/blogs/${blog.id}`}>
                    <FacebookIcon size={20} round />
                  </FacebookShareButton>
                </a>

                {/* whatsapp share button */}
                <a className="btn bg-dark bg-opacity-10">
                  <WhatsappShareButton url={`${FRONTEND_URL}/blogs/${blog.id}`}>
                    <WhatsappIcon size={20} round />
                  </WhatsappShareButton>
                </a>
              </div>

              {/* related blogs */}
              <Row className="align-items-center mb-4">
                <Col xs="3" className="px-0">
                  <Link href="/" className="btn px-0 fw-bold">
                    <HiArrowLeft /> ফিরে যান
                  </Link>
                </Col>
                <Col xs="6" className="px-0">
                  <h1 className="fs-4 fw-bold text-center mb-0">
                    আরো {CategoryModifier(blog.category)}:
                  </h1>
                </Col>
              </Row>

              {relatedBlogs.length !== 0 ? (
                <RelatedBlogs blogs={relatedBlogs} />
              ) : (
                <p className="fw-semibold text-muted text-center py-5">
                  এই বিষয়ে আর কোনো লেখা প্রকাশ করা হয়নি
                </p>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default BlogPreview;

// getting a single blog
export async function getServerSideProps({ params: { id } }) {
  const blog = await getBlog(id);
  const relatedBlogs = (await getRelatedBlogs(id, blog.category)) || [];

  return {
    props: { blog, id, relatedBlogs },
  };
}
