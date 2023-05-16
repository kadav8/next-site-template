import { NextRequest, NextResponse } from "next/server";
import { getArticle } from "@/services/planetscale";

export const config = { runtime: "edge", regions: ["fra1"] };

export default async function ArticleFunction(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  if (request.method === "GET") {
    const article = await getArticle([{ key: 'article.slug', operator: '=', value: slug }]);
    return NextResponse.json(article);
  }
  return NextResponse.json("Method not allowed.");
}
