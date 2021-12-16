function calculatePrice(item, price) {
  let total = price;
  let shipping = 0;
  if (price > 4000) {
    shipping = 700;
  } else if (price > 2000) {
    shipping = 500;
  } else {
    shipping = 300;
  }
  total += shipping;

  console.log(
    `El producto ${item} cuesta ${price}. Su costo de envío es de ${shipping}. 
    Por lo tanto, el precio final es de ${total}`
  );
}

calculatePrice("Macbook", 2500);
calculatePrice("Celular", 500);
calculatePrice("Playstation", 4500);
