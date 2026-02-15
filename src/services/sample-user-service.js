// services is used to interact to repo and further database changes

// in service file we have bunch of logic that we early wirte in controller , insted of that we write here to have seperate file for logic

const { SampleUserRepo } = require("../repositories");

// initialize repo with new key word so we can access thier method and attributes
const sampleUserRepo = new SampleUserRepo();

const createSampleUser = async (data) => {
  console.log(data , "data in service")
  try {
    const user = await sampleUserRepo.create(data);

     // all validation  and logic are written here fo data


     
     // all validation  and logic are written here fo data

    return user;
  } catch (error) {
    console.log(error?.message);
    throw error;
  }
};


module.exports  = { 
    createSampleUser
}
