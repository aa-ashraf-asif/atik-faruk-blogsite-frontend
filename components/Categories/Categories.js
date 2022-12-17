import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { HiChevronDoubleDown } from "react-icons/hi";
import { toBengaliNumber } from "bengali-number";
import { Categories, CategoryModifier } from "lib/category";

const BlogCategories = ({ blogs, defaultCollapse, display }) => {
  return (
    // collapsible blog categories
    <div className={`blog-categories ${display}`}>
      {/* collapse button */}
      <button
        className="btn fw-bold p-0"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="true"
        aria-controls="collapseExample"
      >
        বিষয়সমূহ <HiChevronDoubleDown />
      </button>

      {/* collapsible content */}
      <div className={`collapse mt-3 ${defaultCollapse}`} id="collapseExample">
        <Row className="g-2">
          {Categories.map((category) => (
            <Col key={category} xs="6">
              <Link
                href={`/categories/${category}`}
                className="btn bg-dark bg-opacity-10 border-0 text-dark w-100 px-0"
              >
                {/* category names */}
                {CategoryModifier(category)} (
                {toBengaliNumber(
                  blogs.filter((blog) => {
                    return blog.category === category;
                  }).length
                )}
                )
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BlogCategories;
