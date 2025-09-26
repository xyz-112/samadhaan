function calculateScore() {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    let val = document.querySelector(`[name=q${i}]`).value;
    total += parseInt(val);
  }
  let resultText = "";
  if (total <= 30) {
    resultText = `Your Score: ${total}/100 → Low Stress 🟢`;
  } else if (total <= 70) {
    resultText = `Your Score: ${total}/100 → Moderate Stress 🟡
    Be Happy and Calm`;
  } else {
    resultText = `Your Score: ${total}/100 → High Stress 🔴
    Don't worry we are with you, Always remember you are Precious!`;
  }
  document.getElementById("result").innerText = resultText;
}
