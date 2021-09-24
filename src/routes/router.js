const usersRoutes = require("./users");

function router(app) {
  usersRoutes(app);
}

module.exports = router;
