import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    return {
        title: `Article: ${params.slug}`,
    };
}

async function getArticle(slug: string) {
    const res = await fetch(
        `${process.env.STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=cover`,
        {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
            next: { revalidate: 60 },
        }
    );

    const json = await res.json();
    const article = json.data?.[0];
    return article;
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
    const article = await getArticle(params.slug);

    console.log(article);
    if (!article) return notFound();

    const { title, publishedAt, cover, content } = article;

    const coverUrl =
        cover?.url ??
        cover?.formats?.large?.url;

    const formattedDate = new Date(publishedAt).toLocaleDateString("en-ZA", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <main className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-2 text-primary">{title}</h1>
            <p className="text-sm text-muted-foreground mb-6">{formattedDate}</p>

            {coverUrl && (
                <div className="relative aspect-[3/2] mb-8 rounded overflow-hidden shadow">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverUrl}`}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <article className="prose prose-lg max-w-none">
                {content?.map((block: any, idx: number) => {
                    if (block.type === "paragraph") {
                        return (
                            <p key={idx} className="py-2">
                                {block.children.map((child: any, i: number) => {
                                    console.log(child)

                                    if (child.url) {
                                        return (
                                            <a
                                                key={i}
                                                href={child.url}
                                                className="text-blue-600 underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {child.url}
                                            </a>
                                        );
                                    }
                                       return  child.bold ? (
                                            <strong key={i}>{child.text}</strong>
                                        ) : (
                                            <span key={i}>{child.text}</span>
                                        )
                                    }
                                )}
                            </p>
                        );
                    }

                    // Support more types if needed: headings, lists, etc.
                    return null;
                })}
            </article>
        </main>
    );
}
