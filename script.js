let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-content");
let sidemen = document.getElementById("sidemenu");

// console.log(msg)

function ontab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function closemenu() {
  sidemenu.style.left = "-200px";
}

function openmenu() {
  sidemen.style.left = "0px";
}


// const form = document.forms['submit-to-google-sheet']
//     const msg = document.getElementById("success");

//     form.addEventListener('submit', e => {
//       e.preventDefault()
//       fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => {
//           msg.innerHTML = "Message Sent Sucessfully";
//           setTimeout(function () {
//             msg.innerHTML = "";
//           }, 2000);
//           form.reset();
//         }
//         )
//         .catch(error => console.error('Error!', error.message))
//     })