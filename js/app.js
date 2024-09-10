const allPaymentOptions = [
  {
    image: "/media/logos/payment/tamara.png",
    text: "Tamara",
  },
  {
    image: "/media/logos/payment/master-card.png",
    text: "Mastercard",
  },
  {
    image: "/media/logos/payment/apple-pay.png",
    text: "Apple Pay",
  },
  {
    image: "/media/logos/payment/mada-pay.jpg",
    text: "mada Pay",
  },
  {
    image: "/media/logos/payment/tabby-pay.png",
    text: "Tabby",
  },
];
document.querySelectorAll(".apply-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".payment-wrapper").classList.add("active");
  });
});
document.querySelector("#closePayment").addEventListener("click", () => {
  document.querySelector(".payment-wrapper").classList.remove("active");
});
