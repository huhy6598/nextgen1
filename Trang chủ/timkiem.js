const products = [
    { name: "Gà rán", price: "35.000 VND", url: "/danh mục/html/danhmuc.html#garan", image: "/danh mục/image/garan2.jpg" }
   
];
// Hàm xử lý tìm kiếm
function searchProducts() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultContainer = document.getElementById("searchResults");

    // Xóa kết quả cũ
    resultContainer.innerHTML = "";

    if (query === "") {
        resultContainer.style.display = "none"; // Ẩn nếu không có nội dung
    } else {
        // Lọc sản phẩm (ví dụ dữ liệu giả)
        const results = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            results.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.innerHTML = `
                    <a href="${product.url}" style="display: flex; align-items: center; text-decoration: none; color: inherit;">
                        <img src="${product.image}" alt="${product.name}" />
                        <div>
                            <h4>${product.name}</h4>
                            <p>${product.price}</p>
                        </div>
                    </a>
                `;
                resultContainer.appendChild(productDiv);
            });
        } else {
            resultContainer.innerHTML = "<p>No results found.</p>";
        }

        resultContainer.style.display = "block"; // Hiển thị khi có kết quả
    }
}

// Thêm sự kiện vào nút "Tìm kiếm"
document.getElementById("searchBtn").addEventListener("click", searchProducts);
