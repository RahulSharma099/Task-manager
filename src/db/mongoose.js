const mongoose = require("mongoose");
//🧕 Starting mongodb local server
(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.error("ERROR! ", error);
  }
})();
