import apiRoutes from "./api";

export default (app) => {
  app.use("/note-app/api", apiRoutes);
};
