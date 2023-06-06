// pages/api/revalidate.js

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const data = JSON.parse(req.body);
  const articles = data.articles;
  if (!Array.isArray(articles))
    return res.json({
      error: "Invalid body. articles should be an array",
    });

  // since slug is structured in localized slug: {es: "foo", eu: "bar"}
  // get all localized slugs
  const pathsToRevalidate = articles.flatMap((a) =>
    Object.keys(a.slug).map((key) => `/${a.slug[key]}`)
  );

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    const revalidated = await Promise.all(
      pathsToRevalidate.map(async (path) => {
        try {
          await res.revalidate(path);
          return {
            path,
            revalidated: true,
          };
        } catch (error: any) {
          return {
            path,
            revalidated: false,
            reason: error.message,
          };
        }
      })
    );
    return res.json({
      data: revalidated,
    });
  } catch (err: any) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).json({
      error: err.message,
    });
  }
}
