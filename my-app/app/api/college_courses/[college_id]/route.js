import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(req, {params}) {
  const { college_id } = params;

  try {
    const courses = await prisma.collegeWiseCourse.findMany({
      where: {
        collegeId: parseInt(college_id, 10),
      },
      orderBy: {
        courseFee: "desc",
      },
    });

    // Return the results
    return NextResponse.json(courses, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
