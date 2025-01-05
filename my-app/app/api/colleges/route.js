import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(req) {
  const url = req.nextUrl;
  const city = url.searchParams.get("city");
  const state = url.searchParams.get("state");
console.log(city)
  try {
    const filters = {};

    // Handle City Filter
    if (city) {
      const cityData = await prisma.city.findFirst({
        where: {
          name: city,
        },
      });

      // If no matching city is found, return an empty array
      if (!cityData) {
        return NextResponse.json([], { status: 200 });
      }
      filters.cityId = cityData.id;
    }

    // Handle State Filter
    if (state) {
      const stateData = await prisma.state.findFirst({
        where: {
          name: state,
        },
      });

      // If no matching state is found, return an empty array
      if (!stateData) {
        return NextResponse.json([], { status: 200 });
      }
      filters.stateId = stateData.id;
    }

    // Fetch colleges based on filters
    const colleges = await prisma.college.findMany({
      where: filters,
      orderBy: {
        score: "desc", // Sorting by score in descending order
      },
    });

    return NextResponse.json(colleges, { status: 200 });
  } catch (error) {
    console.error("Error fetching colleges:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
