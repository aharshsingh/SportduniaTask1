-- CreateTable
CREATE TABLE "College" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollegePlacement" (
    "id" SERIAL NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "highestPlacement" DOUBLE PRECISION NOT NULL,
    "averagePlacement" DOUBLE PRECISION NOT NULL,
    "medianPlacement" DOUBLE PRECISION NOT NULL,
    "placementRate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CollegePlacement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollegeWiseCourse" (
    "id" SERIAL NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "courseName" TEXT NOT NULL,
    "courseDuration" TEXT NOT NULL,
    "courseFee" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CollegeWiseCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "College_score_idx" ON "College"("score");
