import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const result = await prisma.collegePlacement.groupBy({
      by: ["year"],
      _avg: {
        highestPlacement: true,
        averagePlacement: true,
        medianPlacement: true,
        placementRate: true,
      },
      where: {
        highestPlacement: { gt: 0 },
        averagePlacement: { gt: 0 },
        medianPlacement: { gt: 0 },
        placementRate: { gt: 0 },
      },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
