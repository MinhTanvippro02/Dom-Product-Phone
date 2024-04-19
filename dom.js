const listItem = [
  {
    name: "Điện thoại Iphone 15 Promax",
    sale: 14,
    oldprice: 34990000,
    price: 29990000,
    description: "Thêm vào giỏ hàng",
    avatar: "apple.jpg",
  },
  {
    name: "Điện thoại Samsung Galaxy S21 Ultra",
    price: 21490000,
    description: "Thêm vào giỏ hàng",
    avatar: "samsung.jpg",
  },
  {
    name: "Điện thoại Xiaomi Redmi Note 10 Pro",
    price: 5900000,
    description: `Thêm vào giỏ hàng`,
    avatar: "redmi.jpg",
  },
  {
    name: "Điện thoại Oppo Reno6 Z",
    price: 6990000,
    description: `Thêm vào giỏ hàng`,
    avatar: "oppo.jpg",
  },
  {
    name: "Điện thoại Vivo V21 5G",
    price: 8990000,
    description: `Thêm vào giỏ hàng`,
    avatar: "vivo.jpg",
  },
  {
    name: "Điện thoại Realme 8 Pro",
    price: 4990000,
    description: `Thêm vào giỏ hàng`,
    avatar: "realme.jpg",
  },
];

const listItemEl = document.getElementById("list-item");
listItemEl.style.display = "flex";
listItemEl.style.justifyContent = "center";
listItemEl.style.backgroundColor = "rgb(240, 240, 240)";
listItemEl.style.padding = "20px";

listItem.forEach((el, index) => {
  const item = document.createElement("div");
  item.classList.add("item");
  item.style.flex = "0 0 calc(33.33% - 30px)";
  item.style.border = "1px solid #e0e0e0";
  item.style.padding = "20px";
  item.style.margin = "15px";
  item.style.maxWidth = "220px";
  item.style.height = "420px";
  item.style.display = "flex";
  item.style.flexDirection = "column";
  item.style.backgroundColor = "white";
  item.style.borderRadius = "20px";
  item.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
  item.style.transition = "transform 0.3s ease";
  item.style.marginBottom = "20px";

  item.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
    this.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.2)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
  });

  const avatar = document.createElement("img");
  avatar.src = el.avatar;
  avatar.style.maxWidth = "100%";
  avatar.style.height = "auto";
  avatar.style.display = "block";
  avatar.style.borderTopLeftRadius = "20px";
  avatar.style.borderTopRightRadius = "20px";
  avatar.style.objectFit = "cover";
  avatar.style.marginBottom = "15px";

  const h3 = document.createElement("h3");
  h3.textContent = el.name;
  h3.style.textAlign = "center";
  h3.style.height = "40px";
  h3.style.fontWeight = "bold";
  h3.style.fontSize = "18px";
  h3.style.marginBottom = "10px";

  const priceWrapper = document.createElement("div");
  priceWrapper.style.display = "flex";
  priceWrapper.style.justifyContent = "center";
  priceWrapper.style.alignItems = "center";

  const priceText = document.createElement("span");
  priceText.textContent = `${el.price.toLocaleString()}đ`;
  priceText.style.fontSize = "20px";
  priceText.style.color = "red";
  priceText.style.fontWeight = "bold";
  priceWrapper.appendChild(priceText);

  if (el.sale !== undefined) {
    const saleText = document.createElement("span");
    saleText.textContent = `-${el.sale.toLocaleString()}%`;
    saleText.style.backgroundColor = "red";
    saleText.style.borderRadius = "5px";
    saleText.style.fontWeight = "bold";
    saleText.style.marginLeft = "10px";
    priceWrapper.appendChild(saleText);
  }

  item.appendChild(avatar);
  item.appendChild(h3);
  item.appendChild(priceWrapper);
  listItemEl.appendChild(item);
});
