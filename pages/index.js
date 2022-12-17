import Layout from "@/components/Layout/Layout";
import Blogs from "@/components/Blogs/Blogs";
import { Col, Container, Row } from "react-bootstrap";
import Categories from "@/components/Categories/Categories";
import SearchBlog from "@/components/SearchBlog/SearchBlog";
import { getBanner, getBlogs } from "lib/api";

const Home = ({ blogs, banner }) => {
  return (
    <Layout banner={banner} image={banner && banner.cover.url}>
      {/* hidden content  */}
      <div
        style={{
          position: "absolute",
          userSelect: "none",
          pointerEvents: "none",
          opacity: 0,
        }}
      >
        <h1>আতিক ফারুক - লেখালেখি | Atik Faruk Blog</h1>
        <p>
          আমার লেখালেখির পৃথিবীতে আপনাকে স্বাগত। সামান্য লেখক হিসেবে আপনাদের
          জন্য আমাদের এসমস্ত আয়োজন।
        </p>
      </div>

      <Container className="blogs-section">
        <Row>
          <Col lg="8" className="pe-lg-5 my-3 my-lg-5  d-flex flex-column gap-3">
            {/* blog categories for mobile */}
            <Categories blogs={blogs} defaultCollapse="" display="d-lg-none" />
            {/* blogs */}
            <Blogs blogs={blogs} />
          </Col>

          <Col lg="4" className="my-lg-5 mb-5">
            {/* blog sidebar */}
            <div className="blogs-section__sidebar">
              {/* blog search for pc */}
              <SearchBlog display="large" />

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

export default Home;

// getting all blogs
export async function getStaticProps() {
  const blogs = (await getBlogs()) || [];
  const banner = await getBanner();

  return {
    props: { blogs, banner },
    revalidate: 1,
  };
}
