const copyBtn = document.getElementById("copyBtn");
const acctNum = document.getElementById("acctNum");

copyBtn.addEventListener("click", function () {
  const digits = acctNum.dataset.raw;
  navigator.clipboard.writeText(digits).then(function () {
    copyBtn.textContent = "Хуулагдлаа ✓";
    setTimeout(function () {
      copyBtn.textContent = "Дугаар хуулах";
    }, 2000);
  });
});