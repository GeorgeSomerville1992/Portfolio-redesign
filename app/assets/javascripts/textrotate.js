  (function () {

    alert("pinkd")
    var texts = document.getElementById('small-intro').getElementsByTagName('h2')
        index = 0;
    console.log(texts) 
    for(i = 0; i < texts.length;i++){
      texts[i].style.display = 'none'
    }


    texts[0].style.display = 'inline';
    setInterval(function () {
        texts[index].style.display = 'none';
        index = (index + 1) % texts.length;
        texts[index].style.display = 'inline';
    }, 5000);
}());

