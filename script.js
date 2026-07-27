const cartCount = document.getElementById("cart-count");
const plusBtns = document.querySelectorAll(".plus");
const minusBtns = document.querySelectorAll(".minus");

plusBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let count = parseInt(cartCount.innerText);
        cartCount.innerText = count + 1;
    });
});

minusBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let count = parseInt(cartCount.innerText);
        if (count > 0) {
            cartCount.innerText = count - 1;
        }
    });
});