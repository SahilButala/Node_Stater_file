const { Logger } = require("../config");

// this is the main class that directly talk with modal  , here we write any custome logic or query like join and custome inside it

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  // ----------------- CREATE FUNC -----------------//
  async create(data) {
    try {
      const res = await this.model.create(data);
      return res;
    } catch (error) {
      console.log(error);
      Logger.error("Somthing went wrong  in the Crud Repo : Create");
      throw error;
    }
  }
  // ----------------- CREATE FUNC -----------------//

  // ----------------- DELETE FUNC BY PK/ID -----------------//
  async destroy(data) {
    try {
      const res = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return res;
    } catch (error) {
      console.log(error);
      Logger.error("Somthing went wrong  in the Crud Repo : Destroy");
      throw error;
    }
  }
  // ----------------- DELETE FUNC BY PK/ID -----------------//

  // ----------------- GET FUNC BASED ON PK(PRIMARY KEY)/ID -----------------//
  async get(data) {
    try {
      const res = await this.model.findByPk(data);
      return res;
    } catch (error) {
      console.log(error);
      Logger.error("Somthing went wrong  in the Crud Repo : Get");
      throw error;
    }
  }
  // ----------------- GET FUNC BASED ON PK/ID -----------------//

  // ----------------- GET ALL DATA  FUNC-----------------//
  async getAll() {
    try {
      const res = await this.model.findAll();
      return res;
    } catch (error) {
      console.log(error);
      Logger.error("Somthing went wrong  in the Crud Repo : Get");
      throw error;
    }
  }
  // ----------------- GET ALL DATA -----------------//

  // ----------------- UPDATE DATA BASED ON PK/ID -----------------//
  async update(id, data) {
    // data : {col : value , ...}
    try {
      const res = await this.model.update(data, {
        where: { id: id },
      });
      return res;
    } catch (error) {
      Logger.error("Something went wrong in Crud Repo : Update");
      throw error;
    }
  }
  // ----------------- UPDATE DATA BASED ON PK/ID -----------------//
}

module.exports = CrudRepository;
