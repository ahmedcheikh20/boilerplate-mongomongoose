require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name : {type : String , required : true },
  age : Number,
  favoriteFoods : [String] 
})


const Person = mongoose.model("Person", personSchema)


const createAndSavePerson = (done) => {
 var Ahmed = new Person({name : 'Ahmed', 
                      age: 29,
                      favoriteFoods:['pîzza','sea food']
})
  Ahmed.save(function(err,rst){
    if(err) return done(null,err)
     done(null,rst)
  })
   
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople,(err,rst)=>{
    if(err) done(null,err)
    done(null,rst)
  })  
};



const findPeopleByName = (personName, done) => {
  Person.find({name:personName},(err,rst)=>{
    if(err) done(null,err)
    done(null,rst)
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food},(err,rst)=>{
    if(err) done(null,err)
    done(null,rst)
  })
};

const findPersonById = (personId, done) => {
  Person.findById({_id:personId},(err,rst)=>{
    if(err) done(null,err)
    done(null,rst)
  })
  
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
   Person.findById({_id:personId},(err,rst)=>{
     if(err) done(null,err)
     rst.favoriteFoods.push(foodToAdd)
     rst.save((error,result)=>{
       if(error) done(error)
       done(null,result)
     })
   } ) 
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
