document.getElementById("submit").onclick = function checkTheList () {
  if ((document.getElementsByClassName('checklist__box')[0].checked) === false){
    alert("Oops! Did you finish your tasks yet?");
  } else if ((document.getElementsByClassName('checklist__box')[1].checked) === false){
    alert("Oops! Did you finish your tasks yet?");
  } else if ((document.getElementsByClassName('checklist__box')[2].checked) === false){
    alert("Oops! Did you finish your tasks yet?");
  } else if ((document.getElementsByClassName('checklist__box')[3].checked) === false){
    alert("Oops! Did you finish your tasks yet?");
  } else if ((document.getElementsByClassName('checklist__box')[4].checked) === false){
    alert("Oops! Did you finish your tasks yet?");
  } else if ((document.getElementsByClassName('checklist__box')[5].checked) === false){
    alert("Oops! Did you finish your tasks yet?");
  } else if ((document.getElementsByClassName('checklist__box')[6].checked) === false){
    alert("Oops! Did you finish your tasks yet?");
  } else if ((document.getElementsByClassName('checklist__box')[7].checked) === false){
      alert("Oops! Did you finish your tasks yet?");
  } else if ((document.getElementsByClassName('checklist__box')[8].checked) === false){
    alert("Oops! Did you finish your tasks yet?");
  } else if ((document.getElementsByClassName('checklist__box')[9].checked) === false){
    alert("Oops! Did you finish your tasks yet?");
  } else {
    alert("Great work!")
    document.getElementById("checklist").reset();
  }
};


