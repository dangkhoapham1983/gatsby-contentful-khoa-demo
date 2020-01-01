import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../component/layout";

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulPost {
          title
          date
          content {
            content
          }
          image {
            file {
              url
            }
          }
        }
      }
    `}
    render={({
        contentfulPost: {
        title,
        date,
        content: { content },
        image: {
          file: { url }
        }
      }
    }) => (
      <>
        <Layout>
        <h1>{title}</h1>
        <small>Created on {date}</small>
        <img src={url} />
        <p>{content}</p>
        </Layout>
      </>
    )}
  />
);

export default HomePage;