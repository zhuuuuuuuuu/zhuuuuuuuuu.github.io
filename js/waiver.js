
/* Problem1*/
var figures=document.getElementsByTagName("figure");
for(let figure of figures){
    figure.classList.add("one-third");
}

/* problem2 */
var footers= document.getElementsByTagName("footer"); 
for (let footer of footers)
{
    footer.addEventListener("click",function(){this.remove();});
}

/*problem3*/
figures[4].addEventListener("dblclick",function(){this.style.visibility='hidden';});


/*problem4:Use an external JavaScript listener to change the font of the first figure caption to Cursive when the mouse is over it and restore the font when the mouse leaves.   Note, you can not hardcode the “original” font - use JS to store it.
*/
var captions = document.getElementsByTagName("figcaption");
var fontStyle_Original=captions[0].style.font;
captions[0].addEventListener("mouseover",function(){this.style.fontFamily="Cursive";});
captions[0].addEventListener("mouseout",function(){this.style.fontFamily=fontStyle_Original;});

/*problem5*/
var num=0;
document.addEventListener("keydown", function(e){
  if (e.key === "Tab" && num%2==0) {
    num=num+1;
    captions[0].style.fontFamily="Cursive";
  } else if(e.key === "Tab" && num%2==1) {
    num=num+1;
    captions[0].style.fontFamily="Times";
  }
});
