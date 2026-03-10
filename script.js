const schedule = [
    {h: 7, t: "🍳 4 Eggs + Oats (Leucine Spike)"},
    {h: 10, t: "🥤 Protein + Creatine (Nitrogen Fix)"},
    {h: 12, t: "🥩 Beef & Rice (Glycogen Load)"},
    {h: 16, t: "🏋️ TIME UNDER TENSION LIFT"},
    {h: 18, t: "🍌 Protein + Banana (Insulin Drive)"},
    {h: 20, t: "🍗 Chicken + Potato (Repair)"},
    {h: 22, t: "💤 Blackout Sleep (Growth Hormone)"}
];

// --- TENSION TIMER LOGIC ---
let timerInterval;
let seconds = 0;

function startTension() {
    clearInterval(timerInterval);
    seconds = 0;
    document.getElementById('timer-display').style.color = "#00ff88";
    timerInterval = setInterval(() => {
        seconds++;
        document.getElementById('timer-display').innerText = seconds + "s";
        if (seconds >= 40) document.getElementById('timer-display').style.color = "#ff9f43";
    }, 1000);
}

function stopTension() {
    clearInterval(timerInterval);
}

// --- CLOCK ENGINE ---
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
    const hour = now.getHours();
    const task = schedule.find(s => hour < s.h) || schedule[schedule.length-1];
    document.getElementById('current-task').innerText = task.t;
}
setInterval(updateClock, 1000);

// --- PHOTO & LOGGING ---
document.getElementById('photo-upload').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.createElement('img');
        img.src = reader.result;
        document.getElementById('photo-preview').innerHTML = '';
        document.getElementById('photo-preview').appendChild(img);
    }
    reader.readAsDataURL(e.target.files[0]);
});

document.getElementById('master-add').addEventListener('click', () => {
    const name = document.getElementById('entry-name').value;
    const val1 = document.getElementById('entry-val1').value;
    const val2 = document.getElementById('entry-val2').value;
    const li = document.createElement('li');
    li.innerHTML = `<strong>${name}</strong>: ${val1} sets / ${val2} reps / ${seconds}s Tension`;
    document.getElementById('activity-log').prepend(li);
    stopTension();
    document.getElementById('timer-display').innerText = "0s";
});
