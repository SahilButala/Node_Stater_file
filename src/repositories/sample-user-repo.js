
// here if we want to create simple crud that time i used crud repo that help to create fast crud application 


const CurdRepo = require("./crud-repo")
const { Sample } = require("../models");



class SampleUser extends CurdRepo{
      constructor(){
         super(Sample)
      }
}

module.exports = SampleUser