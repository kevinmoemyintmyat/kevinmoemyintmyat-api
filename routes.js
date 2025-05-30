const { Router } = require("express");
const { getSmuleData } = require("./lambda/getSmuleData");

const router = Router();

router.get("/", (req, res) => {
  res.json({ status: "HEALTHY" });
});

router.get("/profile", async (req, res) => {
  const { query } = req;
  const { offset = 0, limit = 0 } = query;
  const data = await getSmuleData({ offset, limit });
  res.json(
    data instanceof Error
      ? { error: { name: data.name, stack: data.stack, message: data.message } }
      : data
  );
});

module.exports = {
  router,
};
