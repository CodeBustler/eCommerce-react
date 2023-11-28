const items = [
  {
    id: 1,
    category: "mobiles",
    title: "Apple iPhone 14",
    imgSrc: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3PuckZp",
    description:
      "Apple iPhone 14 (128 GB) - Blue | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, repellat",
    price: "89999",
  },
  {
    id: 5,
    category: "laptops",
    title: "Xiaomi [Smartchoice] Notebookpro",
    imgSrc: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3EzeQaC",
    description:
      "Xiaomi [Smartchoice] Notebookpro | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, repellat",
    price: "49999",
  },
  {
    id: 7,
    category: "tablets",
    title: "Xiaomi Pad 6",
    imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
    amazonLink: "https://amzn.to/3ZeNRdY",
    description:
      "Xiaomi Pad 6| Qualcomm Snapdragon 870 | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, repellat",
    price: "29999",
  },
  {
    id: 2,
    category: "mobiles",
    title: "Apple iPhone 11",
    imgSrc: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
    amazonLink: "https://amzn.to/44MiYi6",
    description:
      "Apple iPhone 11 (64GB) - White | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, repellat",
    price: "79999",
  },
  {
    id: 6,
    category: "tablets",
    title: "Lenovo Tab P12 Pro AMOLED",
    imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
    amazonLink: "https://amzn.to/3RabsdH",
    description:
      "Lenovo Tab P12 Pro AMOLED (12.6 inch (32 cm), 8 GB, 256 GB, Wi-fi Only), Storm Grey with Precision Pen 3",
    price: "19999",
  },
  {
    id: 3,
    category: "mobiles",
    title: "Apple iPhone 13",
    imgSrc: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3r6XJtv",
    description:
      "Apple iPhone 13 (128GB) - Blue | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, repellat",
    price: "69999",
  },
  {
    id: 4,
    category: "laptops",
    title: "Lenovo IdeaPad Slim 5 ",
    imgSrc: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    amazonLink: "https://amzn.to/44JsK4r",
    description:
      'Lenovo IdeaPad Slim 5 Intel Core i5 12450H 14" (35.5cm) | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, repellat ',
    price: "29999",
  },
  {
    id: 9,
    category: "tablets",
    title: "Samsung Galaxy Tab A8",
    imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
    amazonLink: "https://amzn.to/3Pdsh4F",
    description:
      "Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)",
    price: "49999",
  },
  {
    id: 8,
    category: "laptops",
    title: "Apple MacBook Air Laptop",
    imgSrc: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3r9rvhm",
    description:
      "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, | Lorem ipsum dolor, sit amet consectetur adipisicing ",
    price: "89999",
  },
  // MORE DATA
  {
    id: 9,
    category: "laptops",
    title: "ASUS TUF Gaming F15 laptops",
    imgSrc:
      "https://m.media-amazon.com/images/I/51xKHE2Sc7L._SX300_SY300_QL70_FMwebp_.jpg",
    amazonLink:
      "https://www.amazon.in/ASUS-i7-11800H-GeForce-Windows-FX506HE-HN382W/dp/B0CCYGC3TS/ref=sr_1_1?crid=33SFBWL2217T9&keywords=laptop&qid=1700891557&refinements=p_n_feature_thirteen_browse-bin%3A12598163031&rnid=12598141031&s=computers&sprefix=laptop%2Caps%2C209&sr=1-1&th=1",
    description: `ASUS TUF Gaming F15, 15.6"(39.62 cms) FHD 144Hz, Intel Core i7-11800H 11th Gen, 4GB NVIDIA GeForce RTX 3050 Ti, Gaming Laptop (16GB/512GB SSD/Windows 11/90WHrs`,
    price: "69999",
  },
  {
    id: 10,
    category: "laptops",
    title: "Acer Aspire Lite Metal Laptop",
    imgSrc: "https://m.media-amazon.com/images/I/51KL3aOZ0tL._SX679_.jpg",
    amazonLink:
      "https://www.amazon.in/Acer-i7-1165G7-Premium-Windows-AL15-51/dp/B0CM6GFVHJ/ref=sr_1_7?crid=33SFBWL2217T9&keywords=laptop&qid=1700891557&refinements=p_n_feature_thirteen_browse-bin%3A12598163031&rnid=12598141031&s=computers&sprefix=laptop%2Caps%2C209&sr=1-7&th=1",
    description: `Acer Aspire Lite 11th Gen Intel Core i7-1165G7 Premium Metal Laptop (Windows 11 Home/16GB RAM/1TB SSD) AL15-51, 39.62cm (15.6") Full HD Display, Metal Body, Steel Gray, 1.59 Kg`,
    price: "51500",
  },
  {
    id: 11,
    category: "mobiles",
    title: "Samsung Galaxy S22 Ultra 5G",
    imgSrc: "https://m.media-amazon.com/images/I/71PzXKXjz6L._SX679_.jpg",
    amazonLink:
      "https://www.amazon.in/Samsung-Galaxy-Storage-Additional-Exchange/dp/B09XDR98J4/ref=sr_1_1?keywords=mobile+samsung+s22&qid=1700892313&s=electronics&sr=1-1",
    description:
      "Apple iPhone 13 (128GB) - Blue | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, repellat",
    price: "85,999",
  },
  {
    id: 12,
    category: "mobiles",
    title: "OnePlus 11R 5G ",
    imgSrc: "https://m.media-amazon.com/images/I/61u9zN1HYCL._SX679_.jpg",
    amazonLink:
      "https://www.amazon.in/OnePlus-Sonic-Black-128GB-Storage/dp/B0BSNP46QP/ref=sr_1_6?keywords=oneplus&qid=1700892492&s=electronics&sr=1-6&th=1",
    description:
      "OnePlus 11R 5G (Sonic Black, 8GB RAM, 128GB Storage) | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, repellat",
    price: "39,999",
  },
  {
    id: 13,
    category: "laptops",
    title: "Lenovo IdeaPad Slim 5 ",
    imgSrc: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    amazonLink: "https://amzn.to/44JsK4r",
    description:
      'Lenovo IdeaPad Slim 5 Intel Core i5 12450H 14" (35.5cm)| Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, repellat ',
    price: "29999",
  },
  {
    id: 14,
    category: "tablets",
    title: "Samsung Galaxy Tab A8",
    imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
    amazonLink: "https://amzn.to/3Pdsh4F",
    description:
      "Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU) | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, repellat",
    price: "49999",
  },
];

export default items;
