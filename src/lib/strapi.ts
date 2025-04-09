import {compileNonPath} from "next/dist/shared/lib/router/utils/prepare-destination";

console.log(process.env.STRAPI_URL)

export async function getHomePageData() {
    try {
        const res = await fetch(`${process.env.STRAPI_URL}/api/home-page?populate=*`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
            next: { revalidate: 60 }, // ISR
        });

        if (!res.ok) throw new Error('Failed to fetch home data');
        const json = await res.json();
        console.log(json);

        return json.data;
    } catch (error) {
        console.error(error);
    }

}

export async function getNews() {
    try {
        const res = await fetch(`${process.env.STRAPI_URL}/api/articles?populate=*`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
            next: { revalidate: 60 }, // ISR
        });

        if (!res.ok) throw new Error('Failed to fetch home data');
        const json = await res.json();
        console.log(json);

        return json.data;
    } catch (error) {
        console.error(error);
    }

}
