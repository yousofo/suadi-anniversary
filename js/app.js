let currentItem = {
  name: null,
  price: null,
};
let paymentOption = null;
document.querySelectorAll(".apply-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentItem = {
      name: button.getAttribute("data-name"),
      price: button.getAttribute("data-price"),
    };
    document.querySelector(".payment-wrapper").classList.add("active");
  });
});

document.querySelector("#closePayment").addEventListener("click", () => {
  document.querySelector(".payment-wrapper").classList.remove("active");
});

document.querySelectorAll("input[type=radio]").forEach((radio) => {
  radio.addEventListener("click", () => {
    paymentOption = radio.value;
  });
});

async function handlePayment() {
  try {
    const result = await fetch(
      "https://masartech.com.sa/api/ViewsCourses/PayWithoutSaveData",
      {
        method: "POST",
        body: JSON.stringify({
          studentModel: {
            Name: document.querySelector("#name").value,
            PhoneNumbe: document.querySelector("#phone").value,
            Email: document.querySelector("#email").value,
            IdentityNumber: document.querySelector("#id").value,
            Password: document.querySelector("#password").value,
          },
          PackageName: currentItem.name,
          Amount: currentItem.price,
          IsTabby: paymentOption === "tabby",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await result.json();
    alert("جاري التحويل لبوابة الدفع ...");
    window.location.href = data.redirect_url;
  } catch (error) {
    console.log(error);
    alert("حدث خطأ أثناء عملية الدفع. الرجاء المحاولة مرة أخرى.");
  }
}

document.querySelector("#paymentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  handlePayment();
});
