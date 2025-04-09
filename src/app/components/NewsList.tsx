"use client";

import Link from "next/link";
import Image from "next/image";

export default function NewsList({ articles }: { articles: any[] }) {
    console.log(articles);
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
                const coverUrl =
                    article.cover?.formats?.small?.url ??
                    article.cover?.url;

                const previewText =
                    article.content
                        ?.find((block: any) => block.type === "paragraph")
                        ?.children?.map((c: any) => c.text)
                        ?.join(" ")
                        ?.slice(0, 180) ?? "";

                const d = new Date(article.publishedAt);

                return (
                    <Link
                        key={article.id}
                        href={`/article/${article.slug}`}
                        className="rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition bg-white"
                    >
                        <div className="relative aspect-[3/2]">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverUrl}`}
                                alt={article.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <p className="bg-sky-100 rounded-xl w-min p-1 mb-2 whitespace-nowrap">{d.toLocaleString()}</p>

                            <h2 className="text-xl font-semibold mb-2 text-primary">
                                {article.title}
                            </h2>
                            <p className="text-sm text-muted-foreground">{previewText}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
