const express = require("express");
const cors = require("cors");

const app = express();
const port = 2020;
app.use(cors());

app.get("/products", (request, response) => {
  console.log("GET products huselt orj irlee");
  response.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Server is starting in ${port} port`);
});

const data = [
  {
    image:
      "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
    brand: "Samung",
    price: "$1,400,000",
    sale: "15%",
    caticory: "Гал тогоо",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
    brand: "Samung",
    price: "$1,400,000",
    sale: "15%",
    caticory: "Гал тогоо",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
    brand: "Samung",
    price: "$1,400,000",
    sale: "15%",
    caticory: "Гал тогоо",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
    brand: "Samung",
    price: "$1,400,000",
    sale: "15%",
    caticory: "Гал тогоо",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
    brand: "Samung",
    price: "$1,400,000",
    sale: "15%",
    caticory: "Гал тогоо",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
    brand: "Samung",
    price: "$1,400,000",
    sale: "15%",
    caticory: "Гал тогоо",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
    brand: "Samung",
    price: "$1,400,000",
    sale: "15%",
    caticory: "Гал тогоо",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
    brand: "Samung",
    price: "$1,400,000",
    sale: "15%",
    caticory: "Гал тогоо",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
    brand: "Samung",
    price: "$1,400,000",
    sale: "15%",
    caticory: "Гал тогоо",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-100nw-164253011.jpg",
    brand: "Samung",
    price: "$1,400,000",
    sale: "15%",
    caticory: "Гал тогоо",
  },
];
