const handleInput = () => {
  const outputImage = document.querySelector(".output-image");
  const noMessageTitle = document.querySelector(".text-neutral-700");
  const noMessageText = document.querySelector(".text-zinc-600");
  const outputText = document.querySelector(".output-text");
  const copyButton = document.querySelector(".copy-button");

  if (outputTexto.value.trim()) {
    outputImage.classList.add("esconder");
    noMessageTitle.classList.add("hidden");
    noMessageText.classList.add("hidden");
    outputText.classList.remove("hidden");
    copyButton.classList.remove("hidden");
  } else {
    outputImage.classList.remove("esconder");
    noMessageTitle.classList.remove("hidden");
    noMessageText.classList.remove("hidden");
    outputText.classList.add("hidden");
    copyButton.classList.add("hidden");
  }
};

const criptografar = (texto) => {
  const chaveCriptografia = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  return texto.replace(/[eiou]/g, (letra) => chaveCriptografia[letra]);
};

const descriptografar = (textoCriptografado) => {
  const chaveDescriptografia = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  return textoCriptografado.replace(
    /(enter|imes|ai|ober|ufat)/g,
    (seq) => chaveDescriptografia[seq]
  );
};

const inputTexto = document.getElementById("input-texto");
const outputTexto = document.getElementById("output-texto");
const btnCriptografar = document.getElementById("btn-criptografar");
const btnDescriptografar = document.getElementById("btn-descriptografar");
const btnCopiar = document.getElementById("btn-copiar");

btnCriptografar.addEventListener("click", () => {
  const texto = inputTexto.value.toLowerCase();
  outputTexto.value = criptografar(texto);
  handleInput();
});

btnDescriptografar.addEventListener("click", () => {
  const textoCriptografado = inputTexto.value.toLowerCase();
  outputTexto.value = descriptografar(textoCriptografado);
  handleInput();
});

btnCopiar.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(outputTexto.value);
    alert("Texto copiado para a área de transferência!");
  } catch (err) {
    console.error("Falha ao copiar texto: ", err);
  }
});
