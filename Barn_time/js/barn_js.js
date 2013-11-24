var imgArray = ['cow.png', 'horse.png'];
var basePath="/images/";

function imgRandom() {
    for (var i = 0; i < 18; i++) {
        var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
        var image = new Image();
        image.src = basePath+rand;
        document.body.appendChild(image);
    }
}

imgRandom();

<script type="text/javascript">
    function randomImg1() {
      var myImages1 = new Array ();
      myImages1[1] = "img/cow.png";
      myImages1[2] = "img/horse.png";
      var rnd = Math.floor( Math.random() * myImages1.length );
      if( rnd == 0 ) {
        rnd =1;
      }
      
      html_code = '<img class="animal" src="' + myImages1[rnd] + '" />";
      document.write(html_code);
    }
</script>