import { ContentRepositoryFactory } from "../../services/bootstrap";

export default async function preview(req: any, res: any) {
	const { secret, slug } = req.query;

	const repo = ContentRepositoryFactory.createRepo(true);
	if (secret !== process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || !slug) {
		return res.status(401).json({ message: "Invalid token" });
	}

	// Fetch article and recommendations data
	const article = await repo.getArticleBySlug(slug as string, {
		preview: true,
	});

	// If the slug doesn't exist prevent preview mode from being enabled
	if (!article) {
		return res.status(401).json({ message: "Invalid slug" });
	}

	// Enable Preview Mode by setting the cookies
	res.setPreviewData({});

	// Redirect to the path from the fetched post
	// We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
	// res.writeHead(307, { Location: `/posts/${post.slug}` })
	const url = `/${article.slug}`;
	res.write(
		`<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
	);
	res.end();
}
