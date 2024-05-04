const outputEl = document.getElementById("output");

function appendToOutput(value) {
  if (
    (outputEl.innerText === "0" && value !== "0") ||
    outputEl.innerText === "Ошибка"
  ) {
    outputEl.innerText = "";
  }
  outputEl.innerText += value;
}

function clearOutput() {
  document.getElementById("output").innerText = "0";
}

function cal() {
  let output = document.getElementById("output").innerText;

  try {
    let res = eval(output);

    if (isFinite(res)) {
      document.getElementById("output").innerText = res;
    } else {
      document.getElementById("output").innerText = "Ошибка";
    }
  } catch (err) {
    document.getElementById("output").innerText = "Ошибка";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key === "Backspace") {
    clearLastSymbol();
  }

  if (key === "Enter" || key === "=") {
    cal();
  }

  if(/\d|[+*-/()()]/.test(key)){
    appendToOutput(key)
  }
});


function clearLastSymbol(){
    outputEl.textContent=outputEl.textContent.slice(0,-1)
}

function copyText(){

  let textCopy=outputEl.innerText || outputEl.textContent

  let textarea=document.createElement('textarea')
  textarea.value=textCopy
  document.body.appendChild(textarea)

  textarea.select();

  document.execCommand('copy')

  document.body.removeChild(textarea)

  alert('Текст скопирован')
}