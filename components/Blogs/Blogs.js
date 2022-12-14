import Loader from "@/components/Loader/Loader";
import Blog from "@/components/Blog/Blog";

const Blogs = ({ blogs }) => {
  return (
    <div className="d-flex flex-column gap-5">
      {/* blogs */}
      {blogs ? (
        <>
          {blogs.map((blog) => (
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Blogs;
