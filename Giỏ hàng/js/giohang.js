cartItems.innerHTML += `
<div class="cart-item">
    <img src="${item.image}">
    <div class="cart-info">
        <h4>${item.name}</h4>
        <p>${item.price.toLocaleString()}đ</p>

        <div class="cart-actions">
            <button onclick="updateQty('${child.key}', ${item.quantity - 1})">−</button>
            <span>${item.quantity}</span>
            <button onclick="updateQty('${child.key}', ${item.quantity + 1})">+</button>
        </div>
    </div>
</div>
`;
cartTotal.innerText = total.toLocaleString() + "đ";
document.getElementById("cart-total-final").innerText = total.toLocaleString() + "đ";
document.getElementById("checkout-price").innerText = total.toLocaleString() + "đ";
