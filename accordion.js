let acc = document.getElementsByClassName('accordion');


for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var bofirePanel = this.nextElementSibling;
    var panel = bofirePanel.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";

    } else {
      panel.style.display = "block";

    }

  })
}




