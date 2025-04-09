import {getHomePageData, getNews} from "@/lib/strapi";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const home = await getHomePageData();
  const articles = await getNews();
  const cover = home.cover?.url

  return (
      <main className="w-full min-h-screen">
          <section
              className="relative h-[60vh]  flex items-center justify-center text-center text-white"
              style={{
                  backgroundImage: `url(${process.env.STRAPI_URL}${cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
              }}
          >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 z-0"/>

              <div className="relative z-10 px-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                      {home.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-white drop-shadow-md">
                      {home.description}
                  </p>
              </div>
          </section>

          <section className="px-6 py-10 space-y-8 max-w-4xl mx-auto">
              <h2 className="text-h2 text-center">News</h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-10">
                  {articles.map((article) => {
                      const imageUrl =
                          article.cover.formats?.small?.url || article.cover.url;

                      const previewText = article.content
                          ?.find((block) => block.type === "paragraph")
                          ?.children?.map((c: any) => c.text)
                          ?.join(" ")
                          ?.slice(0, 180) ?? "";

                      return (
                          <Link
                              key={article.id}
                              href={`/article/${article.slug}`}
                              className="rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition"
                          >
                              <div className="relative aspect-[3/2]">
                                  <Image
                                      src={`${process.env.STRAPI_URL}${imageUrl}`}
                                      alt={article.title}
                                      fill
                                      className="object-cover"
                                  />
                              </div>
                              <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2 text-primary">
                                      {article.title}
                                  </h2>
                                  <p className="text-sm text-muted-foreground">{previewText}</p>
                              </div>
                          </Link>
                      );
                  })}
              </div>
          </section>
      </main>
  );
}
