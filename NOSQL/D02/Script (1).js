use ITI
db.instructors.find()

db.instructosr.find({age:{$gte:21}})

db.instructors.find({age:{$in:[27,30]}})

db.instructors.find({$or:[{age:21},{lastName:"hesham"}]})


db.instructors.find().forEach(inst=>{
    print(`${inst.firstName},courses:${inst.courses.length}`)
})

db.instructors.find({courses:{$exists:true}}).forEach(inst=>{
    print(`${inst.firstName},courses:${inst.courses.length}`) 
}) 

db.instructors.insert({firstName:"hassan"})
db.instructors.find({salary:{$type:"number"}})


db.instructors.find({courses:{$all:["js","mvc"]}})
db.instructors.find({$and:[{courses:"mvc"},{courses:"js"}]})

db.instructors.find({courses:{$size:{$gt:3}}})

db.instructors.updateOne({_id:6},{$set:{"courses.0":"mmm"}})

db.instructors.updateOne({_id:6,courses:"mmm"},{$set:{"courses.$":"mongodb"}})


db.instructors.updateOne({_id:7},{$push:{courses:"NodeJS"}}) 

db.instructors.updateOne({_id:7},{$addToSet:{courses:"EsNext"}})

db.instructors.updateOne({_id:7},{$pop:{courses:-1}})

db.instructors.updateOne({_id:7},{$pop:{courses:1}})
db.instructors.updateOne({_id:7},{$pull:{courses:"NodeJS"}})