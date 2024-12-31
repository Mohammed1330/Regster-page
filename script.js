

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // الحصول على القيم من المدخلات
    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productQuantity = parseInt(document.getElementById('productQuantity').value);

    if (productName && productPrice && productQuantity) {
        // حساب إجمالي المنتج
        const total = productPrice * productQuantity;

        // إضافة السطر إلى الجدول
        const tableBody = document.querySelector('#productTable tbody');
        const newRow = tableBody.insertRow();

        newRow.innerHTML = `
            <td>${productName}</td>
            <td>${productPrice.toFixed(2)} ر.س</td>
            <td>${productQuantity}</td>
            <td>${total.toFixed(2)} ر.س</td>
        `;

        // تحديث إجمالي المبلغ
        updateTotalAmount();

        // مسح الحقول
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productQuantity').value = '';
    } else {
        alert("من فضلك أكمل جميع الحقول.");
    }
});

// تحديث إجمالي المبلغ
function updateTotalAmount() {
    const rows = document.querySelectorAll('#productTable tbody tr');
    let totalAmount = 0;

    rows.forEach(row => {
        const totalCell = row.cells[3].textContent;
        totalAmount += parseFloat(totalCell.replace(' ر.س', ''));
    });

    document.getElementById('totalAmount').textContent = `إجمالي المبلغ: ${totalAmount.toFixed(2)} ر.س`;
}

// إضافة حدث الخروج
document.getElementById('exitButton').addEventListener('click', function() {
    window.close();
});

// إضافة حدث الطباعة
document.getElementById('printInvoice').addEventListener('click', function() {
    window.print();
});
