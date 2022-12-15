import Book from "@/components/Book/Book";
import Layout from "@/components/Layout/Layout";
import { FRONTEND_URL } from "config";
import { getBooks } from "lib/api";
import { Col, Container, Row } from "react-bootstrap";

const Books = ({ books }) => {
  return (
    <Layout
      title="আমার বই - আতিক ফারুক"
      description="উনিশ সালের অক্টোবর থেকে একে একে প্রকাশিত হতে থাকে আমার বইগুলো। আমার সৃষ্টি, আমার চিন্তার প্রস্ফুরণ। বেয়ারিং নামে একটা ছোটোকাগজ সম্পাদনা করছি, যা পাঠকমহলে ব্যাপক বিস্তৃত।"
      type="website"
      url={`${FRONTEND_URL}/books`}
      image="https://res.cloudinary.com/dnljodavm/image/upload/v1669556247/314652647_1122320148487349_8880385912391610929_n_sv7ybj.jpg"
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
        <h1>আতিক ফারুকের বইসমূহ | Atik Faruk's books</h1>
        <p>
          উনিশ সালের অক্টোবর থেকে একে একে প্রকাশিত হতে থাকে আমার বইগুলো। আমার
          সৃষ্টি, আমার চিন্তার প্রস্ফুরণ। বেয়ারিং নামে একটা ছোটোকাগজ সম্পাদনা
          করছি, যা পাঠকমহলে ব্যাপক বিস্তৃত।
        </p>
      </div>

      <Container className="my-5">
        {/* books heading */}
        <h1 className="fs-3 fw-bold mb-5">আমার বই</h1>

        {/* books */}
        <Row className="justify-content-center gy-5 gx-lg-5">
          {books.map((book) => (
            <Col key={book.id} xs="6" sm="4" lg="3">
              <Book
                id={book.id}
                cover={book.cover}
                title={book.title}
                date={book.date}
                content={book.content}
                purchase={book.purchase}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Books;

// getting all books
export async function getStaticProps() {
  const books = (await getBooks()) || [];

  return {
    props: { books },
    revalidate: 1,
  };
}
