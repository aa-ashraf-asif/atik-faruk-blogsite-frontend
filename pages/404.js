import Layout from "@/components/Layout/Layout";

const Error = () => {
  return (
    <Layout title='দুঃখিত! পাতাটি খুঁজে পাওয়া যায়নি'>
      <section
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <h1 className="display-1">404</h1>
        <h3>দুঃখিত! পাতাটি খুঁজে পাওয়া যায়নি</h3>
      </section>
    </Layout>
  );
};

export default Error;
