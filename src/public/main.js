const socket = io();

socket.on("ping", () => {
  socket.emit("pong");
  console.log("escuchado");
});

const productBtn = document.getElementById("productBtn");
productBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newProduct = {
    title: document.getElementById("productTitle").value,
    price: document.getElementById("productPrice").value,
    productImg: document.getElementById("productImg").value,
  };
  socket.emit("addProduct", newProduct);
});
const tabla = document.getElementById("tabla");
const productElement = document.createElement("tr");
 function getProducts(prductList) {  
  const itemList = prductList;
  console.log(prductList);
  itemList.map((product) => {
    const html = `
      
      <td>${product.title}</td>
      <td>${product.price}</td>
      <td>        
        <img style="height: 40px;" src=" ${product.productImg} " alt="" srcset="" />
      </td>
    
    `;
    productElement.innerHTML(html);
    tabla.append(productElement);
  });
  console.log("fin de funcion getProducts");
}
socket.on("productos", (prductList) => {
  getProducts(prductList);
});
