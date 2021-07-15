const frame = document.querySelector('.frame');

const unchecked = ["130", "131", "149", "150", "151", "152", "168", "169", "170", "171", "172", "173", "187", "188", "190", "191", "193", "194", "207", "208", "209", "210", "211", "212", "213", "214", "229", "232", "248", "250", "251", "253", "267", "269", "272", "274"]
/*
jQuery to fetch the id of divs with class 'block' and 'not:clicked'

var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(script);

var arr=[]; $(".block, div:not(.clicked)").each(function(){(arr.push($(this).prop('id')));});

["130", "131", "149", "150", "151", "152", "168", "169", "170", "171", "172", "173", "187", "188", "190", "191", "193", "194", "207", "208", "209", "210", "211", "212", "213", "214", "229", "232", "248", "250", "251", "253", "267", "269", "272", "274"]
*/

for (let id=1; id <= 400; id++){
  let block = document.createElement('div');
  block.setAttribute('class','block');
  block.setAttribute('id', id);
  block.setAttribute('class', 'clicked');
  block.addEventListener('click',() => {
      block.classList.toggle('clicked');
  });
  frame.appendChild(block);
}

for(let i in unchecked){
  document.getElementById(unchecked[i]).classList.toggle('clicked');
}

