const sheet = document.querySelector(".sheet");
const grabber = document.getElementById("grabber");
const sheetState = document.getElementById("sheetState");
document.querySelectorAll(".ride").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".ride").forEach(item => item.classList.remove("selected"));
  button.classList.add("selected");
  sheet.classList.add("expanded");
  sheetState.textContent = `SELECTED · ${button.dataset.price}`;
}));
let dragStart = null;
grabber.addEventListener("pointerdown", e => { dragStart = e.clientY; grabber.setPointerCapture(e.pointerId); });
grabber.addEventListener("pointerup", e => {
  if (dragStart === null) return;
  const delta = dragStart - e.clientY;
  if (Math.abs(delta) > 12) sheet.classList.toggle("expanded", delta > 0);
  sheetState.textContent = sheet.classList.contains("expanded") ? "SHEET HEIGHT · EXPANDED" : "SHEET HEIGHT · 146 PX";
  dragStart = null;
});

const infoButton = document.getElementById("infoButton");
const tooltip = document.getElementById("tooltipBox");
infoButton.addEventListener("click", () => tooltip.classList.toggle("show"));
document.addEventListener("click", e => {
  if (!e.target.closest(".security")) tooltip.classList.remove("show");
});

const typingReplay = document.getElementById("typingReplay");
typingReplay.addEventListener("click", () => {
  const bubble = document.querySelector(".typing-bubble");
  bubble.classList.remove("replay");
  void bubble.offsetWidth;
  bubble.classList.add("replay");
  bubble.querySelectorAll("i").forEach(dot => { dot.style.animation = "none"; void dot.offsetWidth; dot.style.animation = ""; });
});

const saveButton = document.getElementById("saveButton");
const saveToast = document.getElementById("saveToast");
saveButton.addEventListener("click", () => {
  saveToast.classList.remove("show");
  void saveToast.offsetWidth;
  saveToast.classList.add("show");
  saveButton.textContent = "Saved ✓";
  setTimeout(() => { saveButton.textContent = "Save"; }, 1200);
});

const fileStack = document.getElementById("fileStack");
const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const uploadSuccess = document.getElementById("uploadSuccess");
const uploadName = document.getElementById("uploadName");
function finishUpload(file) {
  if (!file) return;
  uploadName.textContent = file.name;
  uploadSuccess.hidden = false;
  dropZone.hidden = true;
  fileStack.classList.remove("lift");
}
fileStack.addEventListener("dragstart", e => { fileStack.classList.add("lift"); e.dataTransfer.setData("text/plain", "demo-file"); });
fileStack.addEventListener("dragend", () => fileStack.classList.remove("lift"));
dropZone.addEventListener("dragover", e => { e.preventDefault(); dropZone.classList.add("dragover"); fileStack.classList.add("lift"); });
dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragover"));
dropZone.addEventListener("drop", e => {
  e.preventDefault(); dropZone.classList.remove("dragover"); fileStack.classList.remove("lift");
  const file = e.dataTransfer.files[0];
  if (file) finishUpload(file);
  else finishUpload(new File(["Demo content"], "Draft.pdf", {type:"application/pdf"}));
});
fileInput.addEventListener("change", () => finishUpload(fileInput.files[0]));

const payButton = document.getElementById("payButton");
const confetti = document.getElementById("confetti");
const payNote = document.getElementById("payNote");
const colors = ["#29bdf5","#f5c451","#f05b78","#d7e8ff","#39d7b0"];
payButton.addEventListener("click", () => {
  if (payButton.classList.contains("paid")) return;
  payButton.classList.add("paid");
  payButton.textContent = "✓  Paid";
  payNote.textContent = "Success animation · no real payment processed";
  confetti.innerHTML = "";
  for (let i=0;i<18;i++) {
    const piece = document.createElement("i");
    const angle = (Math.PI*2*i)/18;
    const distance = 65 + (i%4)*16;
    piece.style.setProperty("--dx", `${Math.cos(angle)*distance}px`);
    piece.style.setProperty("--dy", `${Math.sin(angle)*distance-18}px`);
    piece.style.setProperty("--rotation", `${i*37}deg`);
    piece.style.setProperty("--piece", colors[i%colors.length]);
    piece.style.animationDelay = `${(i%6)*12}ms`;
    confetti.appendChild(piece);
  }
  setTimeout(() => { payButton.classList.remove("paid"); payButton.textContent = "Pay $24"; }, 2200);
});
