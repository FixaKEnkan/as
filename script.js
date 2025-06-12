const messages = [
  "Te amo meu amor 💕",
  "Te amo para sempre amor 💭",
  "Meu mundo é você 🌍",
  "Teu amor me inspira ✨",
  "Você faz meu coração bater ❤️",
  "Contigo tudo é melhor 🌈",
  "Você é meu lugar favorito 🏡",
  "Amar você é meu destino 🔐",
  "Seu sorriso ilumina meus dias ☀️",
  "Quero estar contigo, sempre 🌙",
  "Você é minha paz no caos 🕊️",
  "Seu olhar muda tudo 👀",
  "Nos seus abraços encontro o lar 🤗",
  "Meu coração te escolheu sem hesitar 💓",
  "Só você faz mágica na minha vida ✨",
  "Seus beijos são minha adição 😘",
  "Você + eu = infinito ♾️",
  "Não preciso de mais nada além de você 🫶",
  "Você é meu sonho realizado 💭💖",
  "Cada segundo contigo vale ouro 🕰️💛"
];

let currentMessage = 0;

document.body.addEventListener("click", (e) => {
  const msg = document.createElement("div");
  msg.className = "love-message";
  msg.innerText = messages[currentMessage];

  msg.style.left = `${e.clientX}px`;
  msg.style.top = `${e.clientY}px`;
  msg.style.transform = "translate(-50%, -50%)"; 

  document.getElementById("message-container").appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 9000);

  currentMessage = (currentMessage + 1) % messages.length;
});
