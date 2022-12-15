import { FRONTEND_URL } from "config";
import { getBlogs, getBooks } from "lib/api";
import { Categories } from "lib/category";
import { getServerSideSitemap } from "next-sitemap";

export async function getServerSideProps(ctx) {
  let blogs = await getBlogs();
  let books = await getBooks();

  const blogSiteMaps =
    blogs &&
    blogs.map((blog) => ({
      loc: `${FRONTEND_URL}/blogs/${blog.id}`,
      lastmod: blog.createdAt.toISOString(),
    }));

  const bookSiteMaps =
    books &&
    books.map((book) => ({
      loc: `${FRONTEND_URL}/books/${book.id}`,
      lastmod: book.date.toISOString(),
    }));

  const categorySiteMaps = Categories.map((category) => ({
    loc: `${FRONTEND_URL}/categories/${category}`,
    lastmod: new Date.toISOString(),
  }));

  const fields = [...blogSiteMaps, ...bookSiteMaps, ...categorySiteMaps];

  return getServerSideSitemap(ctx, fields);
}

export default function Site() {}
