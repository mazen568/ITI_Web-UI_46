db.instructors.createIndex({firstName:-1},{name:"firstNameIndex",background:true})

db.instructors.find({firstName:"omar"}).explain()


db.instructors.aggregate([
{
    $match:{age:{$gt:20}}
},
{
    $group:{
        _id:"$age",
        //count:{$sum:1}
         salaries:{$sum:"$salary"}
    },
    
},
{
    $project:{
        _id:0,
        fullsalary:"$salaries"
    }
}
])