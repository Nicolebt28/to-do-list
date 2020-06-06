function CustomAlert(){
  this.render = function(dialog){
      var winW = window.innerWidth;
      var winH = window.innerHeight;
      var dialogbox = document.getElementById('dialogbox');
      dialogbox.style.left = (winW/2) - (200 * .5)+"px";
      dialogbox.style.top = "100px";
      dialogbox.style.display = "block";
      document.getElementById('dialogboxbody').innerHTML = dialog;
      document.getElementById('dialogboxfooter').innerHTML = '<button id="okbutton" onclick="Alert.ok()">OK</button>';
  }
this.ok = function(){
  document.getElementById('dialogbox').style.display = "none";
}
}
var Alert = new CustomAlert();

document.getElementById("submit").onclick = function checkTheList () {
  if (((document.getElementsByClassName('checklist__to-do-item')[0].value) !== '') && ((document.getElementsByClassName('checklist__box')[0].checked) === false)){
    Alert.render("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[1].value) !== '') && ((document.getElementsByClassName('checklist__box')[1].checked) === false)){
    Alert.render("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[2].value) !== '') && ((document.getElementsByClassName('checklist__box')[2].checked) === false)){
    Alert.render("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[3].value) !== '') && ((document.getElementsByClassName('checklist__box')[3].checked) === false)){
    Alert.render("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[4].value) !== '') && ((document.getElementsByClassName('checklist__box')[4].checked) === false)){
    Alert.render("Oops! Did you finish your tasks yet?");
  } else if ((document.getElementsByClassName('checklist__to-do-item')[5].value && document.getElementsByClassName('checklist__box')[5].checked) === false){
    Alert.render("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[6].value) !== '') && ((document.getElementsByClassName('checklist__box')[6].checked) === false)){
    Alert.render("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[7].value) !== '') && ((document.getElementsByClassName('checklist__box')[7].checked) === false)){
    Alert.render("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[8].value) !== '') && ((document.getElementsByClassName('checklist__box')[8].checked) === false)){
    Alert.render("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[9].value) !== '') && ((document.getElementsByClassName('checklist__box')[9].checked) === false)){
    Alert.render("Oops! Did you finish your tasks yet?");
  } else {
    Alert.render("Great work!")
    document.getElementById("checklist").reset();
  }
};