const express = require("express");
const app = express();
const CategoriesRoutes = require("./routes/categories");
const port = 3000;

app.use("/api/v1/categories", CategoriesRoutes);

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
