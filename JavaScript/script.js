let products = [
    {
      id: 1,
      name:"White T-Shirt",
      Brand: "Priya’s Brand",
      price: "$13.00", 
      image: "/image/img-16.jpg",
    },
    {
      id: 2,
      name:"Dark Green Sweatshirt....",
      Brand: "Roboto’s Brand",
      price: "$127.00", 
      image: "/image/img-17 (1) 2.jpg",
    },
    {
      id: 3,
      name:"Levender Sweatshirt ....",
      Brand: "Jhanvi’s  Brand",
      price: "$133.00", 
      image: "/image/img-18.jpg",
    },
    {
      id: 4,
      name:"Urban jacket with white ....",
      Brand: "Sagar’s  Brand",
      price: "$79.00", 
      image: "/image/img-19 (1) 4.jpg",
    },
    
  ]

const UrlParam = new URLSearchParams(window.location.search);
const productId = parseInt(UrlParam.get("id")); 
const product = products.find(p => p.id === productId);
if (!product){
    document.getElementById("poduct-details").innerHTML = '<p>product not found</p>';
} else {
    const productDetails = document.createElement("div");

    productDetails.innerHTML =`
            <div class="right">
                    <img src="${product.image}" alt="">
                </div>
            </div>
            <div class="right-p">
                <div class="tag">
                    <a href="">Shop</a>
                    <svg width="5" height="12" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.157568 10.9359C-0.0436482 10.7467 -0.0534543 10.4303 0.135666 10.2291L3.92592 6.19642C4.02469 6.09133 4.02469 5.90887 3.92592 5.80379L0.135667 1.77111C-0.0534536 1.56989 -0.0436474 1.25346 0.157569 1.06434C0.358786 0.87522 0.675216 0.885026 0.864336 1.08624L4.65459 5.11892C5.11514 5.60892 5.11514 6.39129 4.65459 6.88128L0.864336 10.914C0.675215 11.1152 0.358785 11.125 0.157568 10.9359Z" fill="#807D7E"/>
                        </svg>
                    <a href="">Women</a>
                    <svg width="5" height="12" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.157568 10.9359C-0.0436482 10.7467 -0.0534543 10.4303 0.135666 10.2291L3.92592 6.19642C4.02469 6.09133 4.02469 5.90887 3.92592 5.80379L0.135667 1.77111C-0.0534536 1.56989 -0.0436474 1.25346 0.157569 1.06434C0.358786 0.87522 0.675216 0.885026 0.864336 1.08624L4.65459 5.11892C5.11514 5.60892 5.11514 6.39129 4.65459 6.88128L0.864336 10.914C0.675215 11.1152 0.358785 11.125 0.157568 10.9359Z" fill="#807D7E"/>
                        </svg>
                    <a href="">Top</a>     
                </div>
                <h1>${product.name}</h1>`;

    document.getElementById("poduct-details").appendChild(productDetails);
    
};






