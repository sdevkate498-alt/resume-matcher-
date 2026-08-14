console.log("JS connected!");

const playBtn = document.querySelector(".play");
const resetBtn = document.querySelector(".reset");

const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const topScore = document.getElementById("topScore");
const statusText = document.getElementById("status");

// 1. Default Candidate Skills
let candidateSkills = ["html", "css", "JavaScript", "React", "Node.js"];

// 2. Job che required skills
let job1Skills = ["React", "TypeScript", "CSS"];
let job2Skills = ["Node.js", "React", "PostgreSQL"];

// Skills chip banavnyasathi
function renderSkills() {
  let container = document.getElementById("skillsContainer");
  container.innerHTML = "";
  candidateSkills.forEach(skill => {
    container.innerHTML += `<span class="skill-chip" onclick="deleteSkill('${skill}')">${skill} ×</span>`;
  });
}

// % calculate karnyasathi
function calculateMatch() {
  let match1 = candidateSkills.filter(s =>
    job1Skills.map(j => j.toLowerCase()).includes(s.toLowerCase())
  ).length;
  let percent1 = Math.round(match1 / job1Skills.length * 100);
  score1.textContent = percent1 + "%";

  let match2 = candidateSkills.filter(s =>
    job2Skills.map(j => j.toLowerCase()).includes(s.toLowerCase())
  ).length;
  let percent2 = Math.round(match2 / job2Skills.length * 100);
  score2.textContent = percent2 + "%";

  let top = Math.max(percent1, percent2);
  topScore.textContent = top + "%";
}

// Skill add karnyasathi
function addSkill() {
  let val = document.getElementById("skillInput").value.trim();
  if(val && !candidateSkills.includes(val)) {
    candidateSkills.push(val);
    renderSkills();
  }
  document.getElementById("skillInput").value = "";
}

// Skill delete karnyasathi
function deleteSkill(skill) {
  candidateSkills = candidateSkills.filter(s => s !== skill);
  renderSkills();
}

playBtn.addEventListener("click", function () {
  statusText.textContent = "Running...";
  setTimeout(() => {
    calculateMatch(); 
    statusText.textContent = "Done!";
  }, 1000);
});

resetBtn.addEventListener("click", function () {
  statusText.textContent = "Analyzing...";
  score1.textContent = "0%";
  score2.textContent = "0%";
  topScore.textContent = "0%";
});

renderSkills(); // Page load la skills dakhav