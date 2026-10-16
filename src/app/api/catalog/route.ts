import { NextResponse } from "next/server";
import { CATALOG_ITEMS } from "@/data/catalog";

export async function GET() {
  return NextResponse.json({
    items: CATALOG_ITEMS,
    total: CATALOG_ITEMS.length,
  });
}
