// Randomize resolution


document.getElementById("btn").addEventListener("click", function() {
    //randomly select resolution
    document.getElementById('Change').textContent = resolved.resolutions[Math.floor(Math.random() * resolved.resolutions.length)];

});
