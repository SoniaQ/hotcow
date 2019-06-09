// How To, Typewriter, w3 schools
var i = 0;
var txt = "Fire away! We'll do our best to help. Or, send us your suggestions and we'll be in touch to add your content in due course."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("autotype").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
