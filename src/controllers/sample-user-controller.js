const { sampleUserService } = require("../services");
const { StatusCodes } = require("http-status-codes");


// controller --> controller just used to structure the output responses not logic

// mostly focus how user will get data --> with proper format 

const createSampleUser = async (req, res) => {
  try {
    console.log( req?.body, "sample data")
    const Sampleuser = await sampleUserService.createSampleUser({
      name: req.body.name,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully  create an Sample User",
      data: Sampleuser,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong ",
      data: {},
      error: error,
    });
  }
};

module.exports = {
  createSampleUser,
};
