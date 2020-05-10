document.getElementById("submit").onclick = function checkTheList () {
  if (((document.getElementsByClassName('checklist__to-do-item')[0].value) !== '') && ((document.getElementsByClassName('checklist__box')[0].checked) === false)){
    alert("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[1].value) !== '') && ((document.getElementsByClassName('checklist__box')[1].checked) === false)){
    alert("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[2].value) !== '') && ((document.getElementsByClassName('checklist__box')[2].checked) === false)){
    alert("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[3].value) !== '') && ((document.getElementsByClassName('checklist__box')[3].checked) === false)){
    alert("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[4].value) !== '') && ((document.getElementsByClassName('checklist__box')[4].checked) === false)){
    alert("Oops! Did you finish your tasks yet?");
  } else if ((document.getElementsByClassName('checklist__to-do-item')[5].value && document.getElementsByClassName('checklist__box')[5].checked) === false){
    alert("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[6].value) !== '') && ((document.getElementsByClassName('checklist__box')[6].checked) === false)){
    alert("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[7].value) !== '') && ((document.getElementsByClassName('checklist__box')[7].checked) === false)){
      alert("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[8].value) !== '') && ((document.getElementsByClassName('checklist__box')[8].checked) === false)){
    alert("Oops! Did you finish your tasks yet?");
  } else if (((document.getElementsByClassName('checklist__to-do-item')[9].value) !== '') && ((document.getElementsByClassName('checklist__box')[9].checked) === false)){
    alert("Oops! Did you finish your tasks yet?");
  } else {
    alert("Great work!")
    document.getElementById("checklist").reset();
  }
};