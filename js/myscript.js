// How To, Typewriter, w3 schools
var i = 0;
var txt = "HOTCoW would love to hear from you! Fire away by filling in the below contact form."; /* The text */
var speed = 35; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("autotype").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
