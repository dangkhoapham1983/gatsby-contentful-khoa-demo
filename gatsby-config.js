const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

//const { spaceId, accessToken } = process.env;

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "l52ees7wpuuj",        
        accessToken: "ybTXybVcALCzFtN6Xz8qEz9LpHr-VLdmXqXGFbVk1iw"
      }
    }
  ]
};
