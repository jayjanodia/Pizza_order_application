<<<<<<< HEAD
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*var modal1 = document.getElementById('id02');

window.onclick = function(event) {
    if(event.target == modal1) {
        modal1.style.display = "none";
    }
}*/

var c = function(pos) {
    var lat = pos.coords.latitude,
        long = pos.coords.longitude,
        coords = lat +','+ long;
    document.getElementById('google_map').setAttribute('src','https://maps.google.co.in?q=' + coords +'&z=60&output=embed');
}

document.getElementById('get_location').onClick = function() {
    navigator.geolocation.getCurrentPosition(c);
    return false; 
}

=======
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var c = function(pos) {
    var lat = pos.coords.latitude,
        long = pos.coords.longitude,
        coords = lat +','+ long;
    document.getElementById('google_map').setAttribute('src','https://maps.google.co.in?q=' + coords +'&z=60&output=embed');
}

document.getElementById('get_location').onClick = function() {
    navigator.geolocation.getCurrentPosition(c);
    return false; 
}
>>>>>>> b0a8a9eb4d35056814dfda9d23e5657bdfdb61a1
