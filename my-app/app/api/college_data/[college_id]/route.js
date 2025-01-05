import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  try {
    const { college_id } = params;

    if (!college_id) {
      return NextResponse.json({ error: "College ID is required" }, { status: 400 });
    }

    const placements = await prisma.collegePlacement.findMany({
      where: {
        collegeId: parseInt(college_id, 10),
        highestPlacement: { gt: 0 }, 
        averagePlacement: { gt: 0 }, 
        medianPlacement: { gt: 0 }, 
        placementRate: { gt: 0 }, 
      },
      orderBy: {
        year: "asc",
      },
    });

    const placementTrend = placements.map((placement, index, array) => {
      if (index === 0) return { ...placement, placementTrend: null };

      const previousRate = array[index - 1].placementRate;
      const currentRate = placement.placementRate;

      const trend =
        currentRate > previousRate ? "UP" : currentRate < previousRate ? "DOWN" : "STABLE";

      return { ...placement, placementTrend: trend };
    });

    return NextResponse.json(placementTrend, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
