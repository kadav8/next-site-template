import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
 
// export const config = { runtime: "edge", regions: ["fra1"] };

export default async function RevalidateFunction(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag");
  // TODO: secure with api-key
  if (request.method === "GET") {
    console.log("clear cache: " + tag)
    if(tag) revalidateTag(tag);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  }
  return NextResponse.json("Method not allowed.");
}