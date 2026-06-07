//1
use FacultySystemV2

db.createCollection("Student")
db.createCollection("Faculty")
db.createCollection("Course")


db.Faculty.insertMany([
{
    _id: 1,
    FacultyName: "Computer Science",
    Address: "abbasya"
},
{
    _id: 2,
    FacultyName: "Business",
    Address: "giza"
}
])


db.Course.insertMany([
{
    _id: 1,
    CourseName: "os",
    FinalMark: 85
},
{
    _id: 2,
    CourseName: "database",
    FinalMark: 92
},
{
    _id: 3,
    CourseName: "oop",
    FinalMark: 78
}
])


db.Student.insertMany([
{
    _id: 1,
    FirstName: "mazen",
    LastName: "raafat",
    IsFired: false,
    FacultyID: 1,
    Courses: [
        {
            CourseID: 1,
            grade: 90
        },
        {
            CourseID: 2,
            grade: 88
        }
    ]
},
{
    _id: 2,
    FirstName: "mohamed",
    LastName: "ahmed",
    IsFired: false,
    FacultyID: 2,
    Courses: [
        {
            CourseID: 1,
            grade: 92
        },
        {
            CourseID: 2,
            grade: 85
        }
    ]
},
{
    _id: 3,
    FirstName: "youssef",
    LastName: "mohamed",
    IsFired: true,
    FacultyID: 1,
    Courses: [
        {
            CourseID: 3,
            grade: 78
        }
    ]
}
])

//2
db.Student.aggregate([
  {
    $project: {
      Fullname: { $concat: ["$FirstName", " ", "$LastName"]},
      gradeAvg: { $avg: "$Courses.grade" }
    }
  }
])

//3
db.Course.aggregate([
{
    $group:{
    _id:null,
    marksSum:{$sum:"$FinalMark"}
}},
{
  $project: {
      marksSum: 1
    }  
}
])



//4
db.Student.aggregate([
  
  { 
    $match: { FirstName: "mazen" } 
  },
  
  {
    $lookup: {
      from: "Course",         
      localField: "Courses.CourseID", 
      foreignField: "_id",    
      as: "studentCourses"   
    }
  },
  {
      $project:{
         Fullname: { $concat: ["$FirstName", " ", "$LastName"]},
         studentCourses:1 
      }
  }
])

//5 

db.Student.aggregate([
{
    $match:{
        FirstName:"mazen"
    }
},
{
    $lookup:{
        from:"Faculty",
        localField:"FacultyID",
        foreignField:"_id",
        as:"Faculty"
    }
},
{
      $project:{
         Fullname: { $concat: ["$FirstName", " ", "$LastName"]},
         Faculty:1 
      }
  }
])