import { gql, request } from "graphql-request";
import { CMS_URL } from "config";

// get all blogs
export const getBlogs = async () => {
  const QUERY = gql`
    query Blogs {
      blogs(first: 1000, orderBy: createdAt_DESC) {
        id
        cover
        title
        category
        content
        createdAt
      }
    }
  `;

  const response = await request(CMS_URL, QUERY);

  return response.blogs;
};

// get blogs by category
export const getBlogsByCategory = async (category) => {
  const QUERY = gql`
    query BlogsByCategory {
      blogs(
        first: 1000
        orderBy: createdAt_DESC
        where: { category: ${category} }
      ) {
        id
        cover
        title
        category
        content
        createdAt
      }
    }
  `;

  const response = await request(CMS_URL, QUERY);

  return response.blogs;
};

// get related blogs
export const getRelatedBlogs = async (id, category) => {
  const QUERY = gql`
    query RelatedBlogs {
      blogs(
        first: 3
        orderBy: createdAt_DESC
        where: {
          id_not: "${id}"
          category: ${category}
        }
      ) {
        id
        cover
        title
        category
        createdAt
      }
    }
  `;

  const response = await request(CMS_URL, QUERY);

  return response.blogs;
};

// get a single blog
export const getBlog = async (id) => {
  const QUERY = gql`
    query Blog {
      blog(where: { id: "${id}" }) {
        id
        cover
        title
        category
        content
        createdAt
      }
    }
  `;

  const response = await request(CMS_URL, QUERY);

  return response.blog;
};

// get all books
export const getBooks = async () => {
  const QUERY = gql`
    query Books {
      books(orderBy: date_DESC, first: 1000) {
        id
        cover
        title
        date
      }
    }
  `;

  const response = await request(CMS_URL, QUERY);

  return response.books;
};

// get a single book
export const getBook = async (id) => {
  const QUERY = gql`
    query Book {
      book(where: { id: "${id}" }) {
        id
        cover
        title
        date
        content {
          html
        }
        purchase
      }
    }
  `;

  const response = await request(CMS_URL, QUERY);

  return response.book;
};

// get banner
export const getBanner = async () => {
  const QUERY = gql`
    query Banner {
      banners {
        cover
      }
    }
  `;

  const response = await request(CMS_URL, QUERY);

  return response.banners[0];
};

// get about
export const getAbout = async () => {
  const QUERY = gql`
    query About {
      abouts {
        content {
          html
        }
      }
    }
  `;

  const response = await request(CMS_URL, QUERY);

  return response.abouts[0];
};
