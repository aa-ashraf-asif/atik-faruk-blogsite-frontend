import Layout from "@/components/Layout/Layout";
import { Container } from "react-bootstrap";
import { FRONTEND_URL } from "config";
import { getAbout } from "lib/api";
import { htmlToText } from "html-to-text";

const About = ({ about }) => {
  return (
    <Layout
      title="পাঠকের প্রতি - আতিক ফারুক"
      description={htmlToText(about.content.html).slice(0, 170)}
      type="website"
      url={`${FRONTEND_URL}/about`}
      image="https://res.cloudinary.com/dnljodavm/image/upload/v1669289726/atik_9548452ea2.jpg"
    >
      <Container className="my-5">
        {/* about heading */}
        <h1 className="fs-3 fw-bold mb-5">পাঠকের প্রতি</h1>

        {/* about content */}
        <div
          className="about__content"
          dangerouslySetInnerHTML={{
            __html: about.content.html,
          }}
        />
      </Container>
    </Layout>
  );
};

export default About;

// getting about
export async function getStaticProps() {
  const about = await getAbout();

  return {
    props: { about },
  };
}
