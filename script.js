const schedule = [
    {h: 7, t: "🍳 BREAKFAST: 4 Eggs + Oats"},
    {h: 10, t: "🥤 SHAKE: Protein + Creatine"},
    {h: 12, t: "🥩 LUNCH: Beef & Rice"},
    {h: 16, t: "🏋️ WORKOUT: High Tension Lift"},
    {h: 18, t: "🍌 POST: Protein & Banana"},
    {h: 20, t: "🍗 DINNER: Chicken & Potato"},
    {h: 22, t: "💤 RECOVERY: Deep Sleep"}
];

function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
    const hour = now.getHours();
    const task = schedule.find(s => hour < s.h) || schedule[schedule.length-1];
    document.getElementById('current-task').innerText = task.t;
}

setInterval(updateClock, 1000);

// Photo Preview
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

// Add to Log
document.getElementById('master-add').addEventListener('click', () => {
    const name = document.getElementById('entry-name').value;
    const li = document.createElement('li');
    li.innerText = `${new Date().toLocaleTimeString()}: ${name}`;
    document.getElementById('activity-log').prepend(li);
    document.getElementById('entry-name').value = '';
});
