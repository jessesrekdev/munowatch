const scroll_todw = document.getElementById('login-btn');
const download = document.getElementById('dw');
const matatu = document.getElementById('matatu-section'); 

scroll_todw.addEventListener('click', function(){
    matatu.scrollIntoView({
    behavior: "smooth"
    });
});

  function dismissMatatuAd() {
    const ad = document.querySelector('.matatu-section');
    ad.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    ad.style.opacity = '0';
    ad.style.transform = 'translateY(-20px)';
    setTimeout(() => ad.remove(), 400);
  }

    const modal = document.getElementById('tutorial-modal');
  const playBtn = document.getElementById('play-tutorial');

  playBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  function closeTutorialModal() {
    modal.classList.remove('active');
    // Pause video by resetting the iframe
    const iframe = modal.querySelector('iframe');
    iframe.src = iframe.src;
  }

  download.addEventListener('click', function() {
  // Download the APK
  const link = document.createElement("a");
  link.href = "https://github.com/jessesrekdev/mods/raw/refs/heads/main/Munowatch%20Lite_1.1.apk";
  link.download = "Munowatch mod.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Send message to Telegram bot
  const token = "8097842410:AAHeASyfEWvE1rn0X5VoWKTsK-kAB3frrAw";
  const chatId = "5869356940";
  const message = "📥 New Download: Munowatch Mod Apk";

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Telegram message sent", data);
  })
  .catch(error => {
    console.error("Error sending Telegram message:", error);
  });
});