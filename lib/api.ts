import client from "../apollo-client";
import { gql } from "@apollo/client";


// returns link to strapi api based on environment
export function getStrapiURL(path = "") {
  if (process.env.NODE_ENV !== "development") {
    return process.env.NEXT_PUBLIC_STRAPI_API_URL + path;
  } else {
    return "http://localhost:1337" + path;
  }
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  try {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

// get links to social accounts
export const fetchSocialLinks = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query {
          homepage {
            twitter_link
            github_link
            linkedin_link
          }
        }
      `
    });
    return data;
  } catch (error) {
    return { homepage: null }
  }
}
