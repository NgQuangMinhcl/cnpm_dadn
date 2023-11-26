const express = require("express");
const path = require("path");
const cors = require("cors");
const db = require("./config/db_connect");
const stat = require("./config/auto_stat");
const user_router = require("./router/user_router");
const date_router = require("./router/date_router");
const auto_router = require("./router/auto_router");
const axios = require("axios");
const app = express();
const cron = require("node-cron");

db.connectDB();

// app.use('/public', express.static(path.join(__dirname, '/public'))); // use this to access static files in public folder

app.use(express.json());
app.use(cors());
app.use("/api", user_router.router);
app.use("/api/date", date_router.router);
app.use("/api/auto", auto_router.router);

app.get("/", (req, res) => {
  const direction = path.join(__dirname, "./front_end/index.html");
  res.sendFile(direction);
});

const openFan = () => {
  try {
    const feedUrl = "https://io.adafruit.com/api/v2/chuloi/feeds/fan/data";
    const newData = {
      value: "1",
    };
    const headers = {
      "X-AIO-Key": "aio_wiwj60jXqilnByY97N5gowhKZ93L",
    };

    axios
      .post(feedUrl, newData, { headers })
      .then(() => {
        console.log("Fan is on");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

const closeFan = () => {
  try {
    const feedUrl = "https://io.adafruit.com/api/v2/chuloi/feeds/fan/data";
    const newData = {
      value: "2",
    };
    const headers = {
      "X-AIO-Key": "aio_wiwj60jXqilnByY97N5gowhKZ93L",
    };

    axios
      .post(feedUrl, newData, { headers })
      .then(() => {
        console.log("Fan is off");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

const openLed = () => {
  try {
    const feedUrl = "https://io.adafruit.com/api/v2/chuloi/feeds/led/data";
    const newData = {
      value: "3",
    };
    const headers = {
      "X-AIO-Key": "aio_wiwj60jXqilnByY97N5gowhKZ93L",
    };

    axios
      .post(feedUrl, newData, { headers })
      .then(() => {
        console.log("Light is on");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

const closeLed = () => {
  try {
    const feedUrl = "https://io.adafruit.com/api/v2/chuloi/feeds/led/data";
    const newData = {
      value: "4",
    };
    const headers = {
      "X-AIO-Key": "aio_wiwj60jXqilnByY97N5gowhKZ93L",
    };

    axios
      .post(feedUrl, newData, { headers })
      .then(() => {
        console.log("Light is off");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

const opentest = () => {
  try {
    const feedUrl =
      "https://io.adafruit.com/api/v2/minhnguyenquang/feeds/switch-feed/data";
    const newData = {
      value: "ON",
    };
    const headers = {
      "X-AIO-Key": "aio_NQQX96T58GanJ28NUb0XUslitfAq",
    };

    axios
      .post(feedUrl, newData, { headers })
      .then(() => {
        console.log("Light is on");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

setInterval(() => {
  const feedUrl = "https://io.adafruit.com/api/v2/chuloi/feeds/cambien1";
  let tempOn = stat.getTempOn();
  let tempOff = stat.getTempOff();
  if (tempOn > -99) {
    axios
      .get(feedUrl)
      .then((response) => {
        let data = response.data;
        let key = parseInt(data.last_value, 10);
        if (key >= tempOn) {
          openFan();
        } else if (key < tempOff) {
          closeFan();
        }
      })
      .catch((error) => {
        console.error("Lỗi khi truy cập Adafruit IO:", error);
      });
  }
}, 10000);
////////////////////////////////////////////////////////////////
setInterval(() => {
  const feedUrl = "https://io.adafruit.com/api/v2/chuloi/feeds/cambien3";
  let light_on = stat.getLightOn();
  let light_off = stat.getLightOff();
  if (light_on > -99) {
    axios
      .get(feedUrl)
      .then((response) => {
        let data = response.data;
        let key = parseInt(data.last_value, 10);
        if (key <= light_on) {
          openLed();
        } else if (key > light_off) {
          closeLed();
        }
      })
      .catch((error) => {
        console.error("Lỗi khi truy cập Adafruit IO:", error);
      });
  }
}, 10000);

let time = "21 18 * * *";

let task1 = cron.schedule(
  time,
  () => {
    closeFan();
    closeLed();
  },
  {
    scheduled: true,
    timezone: "Asia/Ho_Chi_Minh", // Chọn múi giờ phù hợp
  }
);
let task2 = cron.schedule(
  time,
  () => {
    openFan();
    openLed();
  },
  {
    scheduled: true,
    timezone: "Asia/Ho_Chi_Minh", // Chọn múi giờ phù hợp
  }
);
// Khởi động lịch trình
task1.start();
task2.start();

app.post("/api/auto/timeoff", (req, res) => {
  const change = req.body.minute + " " + req.body.hour + " * * *";
  // Hủy lịch trình hiện tại
  task1.stop();

  // Khởi tạo lại với thời gian mới
  task1 = cron.schedule(
    change,
    () => {
      closeFan();
      closeLed();
    },
    {
      scheduled: true,
      timezone: "Asia/Ho_Chi_Minh", // Chọn múi giờ phù hợp
    }
  );

  // Khởi động lịch trình mới
  task1.start();

  res.status(200).json({ success: true });
});

app.post("/api/auto/timeon", (req, res) => {
  const change = req.body.minute + " " + req.body.hour + " * * *";
  // Hủy lịch trình hiện tại
  task2.stop();

  // Khởi tạo lại với thời gian mới
  task2 = cron.schedule(
    change,
    () => {
      // openFan();
      // openLed();
      opentest();
    },
    {
      scheduled: true,
      timezone: "Asia/Ho_Chi_Minh", // Chọn múi giờ phù hợp
    }
  );

  // Khởi động lịch trình mới
  task2.start();

  res.status(200).json({ success: true });
});
app.listen(3000, () => console.log("Server started"));
