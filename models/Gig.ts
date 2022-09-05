import Sequelize from "sequelize";
import db from "../config/database.js";

// Creating Model using Sequelize
const Gig = db.define("gig", {
  id: {
    type: Sequelize.INTEGER,
  },
  // Define Model here
  title: {
    // add type of that file
    type: Sequelize.STRING,
  },
  technologies: {
    type: Sequelize.STRING,
  },
  budget: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  contact_email: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

// Export Gig Model
export default Gig;
