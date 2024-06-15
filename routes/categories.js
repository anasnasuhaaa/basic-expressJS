const express = require("express");
const router = express.Router();

const app = express;

router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.post("/", (req, res) => {
  res.status(200).json({
    message: "berhasil cuy",
  });
});
router.get("/filterData", (req, res) => {
  res.json({
    message: "route filter data",
    data: {
      id: 1,
      name: "filter data",
      description: "ini adalah filter data",
    },
  });
});
router.get("/:nama", (req, res) => {
  res.status(200).send(`route param dari ${req.params.nama}`);
});

module.exports = router;
