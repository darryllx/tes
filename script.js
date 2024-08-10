function submitForm() {
    var input = document.getElementById("namaKucing").value;
    if (input.toLowerCase() === "neko") {
      window.location.href = "homePage.html";
    } else {
      alert("Ah salah dong!");
    }
  }

// function toggleMusic() {
//     var music = document.getElementById("backgroundMusic");
//     if (music.paused) {
//         music.play();
//     } else {
//         music.pause();
//     }
// }   

window.onload = function() {
    setTimeout(function() {
      var music = document.getElementById("backgroundMusic");
      music.play();
    }, 500); // 3000 ms = 3 detik
  }
  