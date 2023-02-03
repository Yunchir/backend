const express = require("express");
const cors = require("cors");
const { request } = require("express");
const fs = require("fs");
const data = require("./data/product.json");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 2020;
app.use(cors());
app.use(express.json());

app.get("/products", (request, response) => {
  console.log("GET products huselt orj irlee");
  fs.readFile("./data/product.json", (err, data) => {
    if (err) {
      response.status(500).send({ message: err });
    } else {
      response.status(200).send(JSON.parse(data));
    }
  });
});

app.post("/products", (request, response) => {
  data.push(request.body);
  fs.readFile("./data/product.json", (err, data) => {
    if (err) {
      response.status(500).send({ message: err });
    } else {
      const product = JSON.parse(data);
      product.push({ ...request.body, id: uuidv4() });
      fs.writeFile("./data/product.json", JSON.stringify(product), (err) => {
        if (err) {
          response.status(500).send({ message: err });
        } else {
          response
            .status(200)
            .send({ message: "Product added successful added" });
        }
      });
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  fs.readFile("./data/product.json", (err, product) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let data = JSON.parse(product);
      const id = req.params.id;
      console.log("delete hust orj irle");
      data = data.filter((product) => product.id !== id);
      console.log("product :", product);
      console.log("data :", data);
      fs.writeFile("./data/product.json", JSON.stringify(data), (err) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.status(200).send({ message: "Product added successful added" });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is starting in ${port} port`);
});

// const data = [
//   {
//     image:
//       "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
//     brand: "Samung",
//     price: "$1,400,000",
//     sale: "15%",
//     caticory: "Гал тогоо",
//     date: "2020.02.22",
//     order: "#1583",
//     number: "99110100",
//     email: "qwe@gmail.com",
//     num: "3",
//     pay: "kartaaр",
//     status: "active",
//     sureName: "Улаанбанди",
//     firstName: "Юнчир",
//     address: "БЗД 22-хороо...",
//     id: "12wqa3",
//   },
//   {
//     image:
//       "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
//     brand: "Samung",
//     price: "$1,400,000",
//     sale: "15%",
//     caticory: "Гал тогоо",
//     date: "2020.02.22",
//     order: "#1583",
//     number: "99110100",
//     email: "qwe@gmail.com",
//     num: "3",
//     pay: "kartaaр",
//     status: "active",
//     sureName: "Улаанбанди",
//     firstName: "Юнчир",
//     address: "БЗД 22-хороо...",
//     id: "123456",
//   },
//   {
//     image:
//       "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
//     brand: "Samung",
//     price: "$1,400,000",
//     sale: "15%",
//     caticory: "Гал тогоо",
//     date: "2020.02.22",
//     order: "#1583",
//     number: "99110100",
//     email: "qwe@gmail.com",
//     num: "3",
//     pay: "kartaaр",
//     status: "active",
//     sureName: "Улаанбанди",
//     firstName: "Юнчир",
//     address: "БЗД 22-хороо...",
//     id: "123",
//   },
// ];
