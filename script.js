let score = 0;

function feedMonster() {
  score++;
  document.getElementById('score').textContent = score;

  if (score >= 5) {
        document.getElementById("monster").innerText = "🦖";
      }
}

