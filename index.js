//  # lấy ra các phần từ
const wrapperImg = document.querySelector("#wrapper__img");
const imgQR = document.querySelector("#wrapper__qr");
const input = document.querySelector(".wrapper__input");
const btn = document.querySelector(".wrapper__btn");

console.log(btn);
console.log(input);
console.log(imgQR);
console.log(wrapperImg);

// QR Code API
const url = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example `;

// # Tạo mã QR và hiển thị hình ảnh
function generateQR() {
  if (input.value.length > 0) {
    imgQR.src =
      " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
    wrapperImg.classList.add("show");
  } else {
    const span = document.createElement("span");
    span.innerHTML = "Vui lòng nhập dữ liệu trước khi tạo mã QR";
    span.classList.add("warning");
    const wrapper = document.querySelector(".wrapper");
    wrapper.insertBefore(span, wrapperImg);
    input.classList.add("error");
    input.focus();

    // # Xóa warning và error sau 1s
    setTimeout(() => {
      input.classList.remove("error");
      span.classList.remove("warning");
      wrapper.removeChild(span);
    }, 1000);
  }
}

// # lắng nghe sự kiện click
btn.addEventListener("click", function (e) {
  generateQR();
});

// # lắng nghe sự kiện nhập vào input và "Enter"
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    generateQR();
  }
});
