import { FRONTEND_URL } from "config";
import { getBlogs, getBooks } from "lib/api";
import { getServerSideSitemap } from "next-sitemap";

export async function getServerSideProps(ctx) {
  let blogs = await getBlogs();
  let books = await getBooks();

  const blogSiteMaps =
    blogs &&
    blogs.map((blog) => ({
      loc: `${FRONTEND_URL}/${blog.id}`,
      lastmod: blog.createdAt.toISOString(),
    }));

  const bookSiteMaps =
    books &&
    books.map((book) => ({
      loc: `${FRONTEND_URL}/${book.id}`,
      lastmod: book.date.toISOString(),
    }));

  const fields = [...blogSiteMaps, ...bookSiteMaps];

  return getServerSideSitemap(ctx, fields);
}

export default function Site() {}
