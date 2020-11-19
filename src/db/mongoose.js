const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.error("ERROR! ", error);
  }
})();