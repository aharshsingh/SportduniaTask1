const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

  const cities = [
    { "name": "New York" },
    { "name": "Los Angeles" },
    { "name": "Chicago" },
    { "name": "San Francisco" },
    { "name": "Houston" },
    { "name": "Phoenix" },
    { "name": "San Diego" },
    { "name": "Dallas" },
    { "name": "Austin" },
    { "name": "San Jose" },
    { "name": "Denver" },
    { "name": "Seattle" },
    { "name": "Boston" },
    { "name": "Miami" },
    { "name": "Atlanta" },
    { "name": "Orlando" },
    { "name": "Nashville" },
    { "name": "Portland" },
    { "name": "Las Vegas" },
    { "name": "Philadelphia" }
  ];

  await prisma.city.createMany({ data: cities });

  const states = [
  { "name": "New York" },
  { "name": "California" },
  { "name": "Illinois" },
  { "name": "Texas" },
  { "name": "Florida" },
  { "name": "Arizona" },
  { "name": "Colorado" },
  { "name": "Washington" },
  { "name": "Massachusetts" },
  { "name": "Nevada" },
  { "name": "Georgia" },
  { "name": "Tennessee" },
  { "name": "Oregon" },
  { "name": "Pennsylvania" },
  { "name": "Ohio" },
  { "name": "Michigan" },
  { "name": "Minnesota" },
  { "name": "Wisconsin" },
  { "name": "Utah" },
  { "name": "Alabama" }
]

  await prisma.state.createMany({ data: states });

  const colleges = [
    { "name": "College A", "score": 950, "cityId": 1, "stateId": 1 },
    { "name": "College B", "score": 920, "cityId": 2, "stateId": 2 },
    { "name": "College C", "score": 940, "cityId": 3, "stateId": 3 },
    { "name": "College D", "score": 890, "cityId": 4, "stateId": 4 },
    { "name": "College E", "score": 850, "cityId": 5, "stateId": 5 },
    { "name": "College F", "score": 980, "cityId": 6, "stateId": 6 },
    { "name": "College G", "score": 870, "cityId": 7, "stateId": 7 },
    { "name": "College H", "score": 910, "cityId": 8, "stateId": 8 },
    { "name": "College I", "score": 860, "cityId": 9, "stateId": 9 },
    { "name": "College J", "score": 890, "cityId": 10, "stateId": 10 },
    { "name": "College K", "score": 930, "cityId": 11, "stateId": 11 },
    { "name": "College L", "score": 880, "cityId": 12, "stateId": 12 },
    { "name": "College M", "score": 940, "cityId": 13, "stateId": 13 },
    { "name": "College N", "score": 850, "cityId": 14, "stateId": 14 },
    { "name": "College O", "score": 970, "cityId": 15, "stateId": 15 },
    { "name": "College P", "score": 910, "cityId": 16, "stateId": 16 },
    { "name": "College Q", "score": 900, "cityId": 17, "stateId": 17 },
    { "name": "College R", "score": 880, "cityId": 18, "stateId": 18 },
    { "name": "College S", "score": 940, "cityId": 19, "stateId": 19 },
    { "name": "College T", "score": 950, "cityId": 20, "stateId": 20 }
  ];

  await prisma.college.createMany({ data: colleges });

  const placements = [
    { "collegeId": 1, "year": 2023, "highestPlacement": 150.5, "averagePlacement": 100.0, "medianPlacement": 90.0, "placementRate": 95.0 },
    { "collegeId": 2, "year": 2023, "highestPlacement": 140.0, "averagePlacement": 90.0, "medianPlacement": 85.0, "placementRate": 90.0 },
    { "collegeId": 3, "year": 2022, "highestPlacement": 145.0, "averagePlacement": 95.0, "medianPlacement": 87.0, "placementRate": 92.0 },
    { "collegeId": 4, "year": 2022, "highestPlacement": 155.0, "averagePlacement": 105.0, "medianPlacement": 97.0, "placementRate": 96.0 },
    { "collegeId": 5, "year": 2021, "highestPlacement": 135.0, "averagePlacement": 85.0, "medianPlacement": 80.0, "placementRate": 85.0 },
    { "collegeId": 6, "year": 2021, "highestPlacement": 125.0, "averagePlacement": 75.0, "medianPlacement": 70.0, "placementRate": 80.0 },
    { "collegeId": 7, "year": 2020, "highestPlacement": 140.5, "averagePlacement": 90.5, "medianPlacement": 85.5, "placementRate": 88.5 },
    { "collegeId": 8, "year": 2020, "highestPlacement": 130.0, "averagePlacement": 80.0, "medianPlacement": 75.0, "placementRate": 82.0 },
    { "collegeId": 9, "year": 2019, "highestPlacement": 120.0, "averagePlacement": 70.0, "medianPlacement": 65.0, "placementRate": 78.0 },
    { "collegeId": 10, "year": 2019, "highestPlacement": 140.0, "averagePlacement": 90.0, "medianPlacement": 85.0, "placementRate": 90.0 },
    { "collegeId": 11, "year": 2018, "highestPlacement": 160.0, "averagePlacement": 110.0, "medianPlacement": 100.0, "placementRate": 98.0 },
    { "collegeId": 12, "year": 2018, "highestPlacement": 150.0, "averagePlacement": 100.0, "medianPlacement": 95.0, "placementRate": 94.0 },
    { "collegeId": 13, "year": 2017, "highestPlacement": 130.0, "averagePlacement": 85.0, "medianPlacement": 80.0, "placementRate": 86.0 },
    { "collegeId": 14, "year": 2017, "highestPlacement": 140.0, "averagePlacement": 90.0, "medianPlacement": 85.0, "placementRate": 90.0 },
    { "collegeId": 15, "year": 2016, "highestPlacement": 135.0, "averagePlacement": 87.5, "medianPlacement": 82.5, "placementRate": 88.0 },
    { "collegeId": 16, "year": 2016, "highestPlacement": 125.0, "averagePlacement": 77.5, "medianPlacement": 72.5, "placementRate": 80.0 },
    { "collegeId": 17, "year": 2015, "highestPlacement": 140.5, "averagePlacement": 90.5, "medianPlacement": 85.5, "placementRate": 89.0 },
    { "collegeId": 18, "year": 2015, "highestPlacement": 130.0, "averagePlacement": 80.0, "medianPlacement": 75.0, "placementRate": 83.0 },
    { "collegeId": 19, "year": 2014, "highestPlacement": 120.0, "averagePlacement": 70.0, "medianPlacement": 65.0, "placementRate": 78.0 },
    { "collegeId": 20, "year": 2014, "highestPlacement": 140.0, "averagePlacement": 90.0, "medianPlacement": 85.0, "placementRate": 90.0 }
  ];  
  await prisma.collegePlacement.createMany({ data: placements });

  const courses = [
    { "collegeId": 1, "courseName": "Computer Science", "courseDuration": "4 years", "courseFee": 50000.0 },
    { "collegeId": 2, "courseName": "Engineering", "courseDuration": "4 years", "courseFee": 45000.0 },
    { "collegeId": 3, "courseName": "Mathematics", "courseDuration": "3 years", "courseFee": 30000.0 },
    { "collegeId": 4, "courseName": "Physics", "courseDuration": "4 years", "courseFee": 32000.0 },
    { "collegeId": 5, "courseName": "Biology", "courseDuration": "3 years", "courseFee": 28000.0 },
    { "collegeId": 6, "courseName": "Chemistry", "courseDuration": "4 years", "courseFee": 31000.0 },
    { "collegeId": 7, "courseName": "Economics", "courseDuration": "3 years", "courseFee": 29000.0 },
    { "collegeId": 8, "courseName": "Psychology", "courseDuration": "3 years", "courseFee": 27000.0 },
    { "collegeId": 9, "courseName": "Business Administration", "courseDuration": "4 years", "courseFee": 40000.0 },
    { "collegeId": 10, "courseName": "Mechanical Engineering", "courseDuration": "4 years", "courseFee": 45000.0 },
    { "collegeId": 11, "courseName": "Electrical Engineering", "courseDuration": "4 years", "courseFee": 46000.0 },
    { "collegeId": 12, "courseName": "Civil Engineering", "courseDuration": "4 years", "courseFee": 44000.0 },
    { "collegeId": 13, "courseName": "Music", "courseDuration": "3 years", "courseFee": 25000.0 },
    { "collegeId": 14, "courseName": "Fine Arts", "courseDuration": "3 years", "courseFee": 26000.0 },
    { "collegeId": 15, "courseName": "Law", "courseDuration": "5 years", "courseFee": 55000.0 },
    { "collegeId": 16, "courseName": "Design", "courseDuration": "4 years", "courseFee": 42000.0 },
    { "collegeId": 17, "courseName": "Architecture", "courseDuration": "5 years", "courseFee": 50000.0 },
    { "collegeId": 18, "courseName": "Journalism", "courseDuration": "3 years", "courseFee": 30000.0 },
    { "collegeId": 19, "courseName": "Sociology", "courseDuration": "3 years", "courseFee": 27000.0 },
    { "collegeId": 20, "courseName": "Political Science", "courseDuration": "3 years", "courseFee": 28000.0 }
  ];  
  await prisma.collegeWiseCourse.createMany({ data: courses });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
