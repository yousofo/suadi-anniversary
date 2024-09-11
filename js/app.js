document.querySelectorAll(".apply-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".payment-wrapper").classList.add("active");
  });
});

document.querySelector("#closePayment").addEventListener("click", () => {
  document.querySelector(".payment-wrapper").classList.remove("active");
});
