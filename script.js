function yesClicked() {
  const questionBox = document.querySelector('.question-box');
  questionBox.classList.add('fade-out');

  setTimeout(() => {
    document.getElementById("question-section").classList.add("hidden");
    const gardenSection = document.getElementById("garden-section");
    gardenSection.classList.remove("hidden");
  },1000);
      
    setTimeout(()=>{
      document.getElementById("go-to-flower-btn").classList.remove("hidden-btn");
    },1000);
  
  function goToFlowerPage() {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = 'flower-main/index.html';
  }, 1000);
}
    // Typed.js message
    new Typed('#typed-text', {
      strings: ["Happy Birthday Bacchheeee always keep smiling i know sometimes hard time will also come but i'm here with you betaa we will fix everything i love you soo much n i misss youuu beta and after a while just like other we will also hold hand's , look in each others eye's and much more till then take care and enjoy your day princess... 🌸"],
      typeSpeed: 60,
      showCursor: false
    },1000);

    setTimeout(()=>{
      document.getElementById("content-section").classList.remove("hidden");
    },1000);
};



function noClicked() {
  alert("Okay, I'll wait... 😔");
};

