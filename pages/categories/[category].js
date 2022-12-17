import Categories from "@/components/Categories/Categories";
import Blog from "@/components/Blog/Blog";
import Layout from "@/components/Layout/Layout";
import { FRONTEND_URL } from "config";
import { getBlogs, getBlogsByCategory } from "lib/api";
import { CategoryModifier } from "lib/category";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { HiArrowLeft } from "react-icons/hi";
import Loader from "@/components/Loader/Loader";
import SearchBlog from "@/components/SearchBlog/SearchBlog";

const FilteredBlogs = ({ blogs, blogsByCategory, category }) => {
  return (
    <Layout
      title={`${CategoryModifier(category)} - আতিক ফারুক`}
      description={`আতিক ফারুকের ${CategoryModifier(category)}সমূহ পড়ুন।`}
      type="website"
      url={`${FRONTEND_URL}/categories/${category}`}
    >
      {/* hidden content  */}
      <div
        style={{
          position: "absolute",
          userSelect: "none",
          pointerEvents: "none",
          opacity: 0,
        }}
      >
        <h1>
          আতিক ফারুকের {CategoryModifier(category)} | Atik Faruk&apos;s{" "}
          {category}
        </h1>
        <p>
          আমার লেখালেখির পৃথিবীতে আপনাকে স্বাগত। সামান্য লেখক হিসেবে আপনাদের
          জন্য আমাদের এসমস্ত আয়োজন।
        </p>
      </div>

      <Container className="blogs-section">
        <Row>
          <Col lg="8" className="pe-lg-5 my-5 d-flex flex-column gap-5">
            {/* blog section heading */}
            <Row className="align-items-center">
              <Col xs="3" className="px-0">
                <Link href="/" className="btn px-0 fw-bold">
                  <HiArrowLeft /> ফিরে যান
                </Link>
              </Col>
              <Col xs="6" className="px-0">
                <h2 className="fs-3 fw-bold text-center mb-0">
                  বিষয়: {CategoryModifier(category)}
                </h2>
              </Col>
            </Row>

            {/* blogs data */}
            <div className="d-flex flex-column gap-5">
              {/* filtered blogs */}
              {blogsByCategory ? (
                <>
                  {blogsByCategory.length === 0 ? (
                    <div className="py-5">
                      <p className="fw-semibold text-muted text-center py-5">
                        এই বিষয়ে কোনো লেখা প্রকাশ করা হয়নি
                      </p>
                    </div>
                  ) : (
                    <>
                      {blogsByCategory.map((blog) => (
                        <Blog
                          key={blog.id}
                          id={blog.id}
                          cover={blog.cover}
                          title={blog.title}
                          category={blog.category}
                          date={blog.createdAt}
                          content={blog.content}
                        />
                      ))}
                    </>
                  )}
                </>
              ) : (
                <Loader />
              )}
            </div>
          </Col>

          <Col lg="4" className="my-5">
            {/* blog sidebar */}
            <div className="blogs-section__sidebar">
              {/* blog search for pc */}
              <SearchBlog device="large" />

              <hr className="my-4" />
              {/* blog categories for pc */}
              <Categories blogs={blogs} defaultCollapse="show" display="" />

              <hr className="my-4" />
              {/* facebook profile view */}
              <div
                className="social overflow-hidden rounded"
                style={{ height: "130px" }}
              >
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fatikfarukoffice&tabs&width=700&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  style={{ overflow: "hidden", width: "100%" }}
                  scrolling="no"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default FilteredBlogs;

// getting blogs
export async function getServerSideProps({ params: { category } }) {
  const blogs = (await getBlogs()) || [];
  const blogsByCategory = (await getBlogsByCategory(category)) || [];

  return {
    props: {
      blogs,
      blogsByCategory,
      category,
    },
  };
}
