import NewsList from "@/app/components/NewsList";

async function getNews() {
    const res = await fetch(`${process.env.STRAPI_URL}/api/articles?populate=cover`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
        next: { revalidate: 60 }, // ISR
    });

    const json = await res.json();
    return json.data;
}

export default async function NewsPage() {
    const articles = await getNews();

    return (
        <main className="container max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-primary">News</h1>
            <NewsList articles={articles} />
        </main>
    );
}
