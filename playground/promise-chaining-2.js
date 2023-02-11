require('../src/db/mongoose')
const Task = require('../src/models/task')

//  Task.findByIdAndDelete('63e378346d94b50e0c2996f1').then((task) =>{
//     console.log(task)

//     return Task.countDocuments({ completed: false })
//  }).then((result) => {
//     console.log(result)
//  }).catch((e) => {
//     console.log(e)
//  })

 const deleteTaskAndCount = async (id) =>{
   const task = Task.findByIdAndDelete(id)
   const count = Task.countDocuments({ completed: false })

   return count
 }

 deleteTaskAndCount('63e2d1a3f9e0a624c00be105').then((count) => {
   console.log(count)
 }).catch((e) => {
   console.log(e)
 })