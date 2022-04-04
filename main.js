function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifyer=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/dar-w2ip3/model.json",modelloaded)

}
function modelloaded(){
    classifyer.classify(gotresult)
}
function gotresult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)

     red= Math.floor(Math.random()*255)+1 ;
     green= Math.floor(Math.random()*255)+1;
     blue= Math.floor(Math.random()*255)+1;

     document.getElementById("soundname").innerHTML= "VOICE RECOGNIZED " + result[0].label;
     document.getElementById("soundaccuracy").innerHTML ="ACCURACY "+ (result[0].confidence * 100).toFixed(2) + " % ";

     document.getElementById("soundname").style.color="rgb("+red+","+green+","+blue+")";
     document.getElementById("soundaccuracy").style.color="rgb("+red+","+green+","+blue+")";

     img_1=document.getElementById("aliens-01")
     img_2=document.getElementById("aliens-02")
     img_3=document.getElementById("aliens-03")
     img_4=document.getElementById("aliens-04")

     if(result[0].label == "piano"){
         img_1.src="aliens-01.gif";
         img_2.src="aliens-02.png";
         img_3.src="aliens-03.png";
         img_4.src="aliens-04.png";
     }
     else if(result[0].label = "guitar"){
        img_1.src="aliens-01.png";
        img_2.src="aliens-02.gif";
        img_3.src="aliens-03.png";
        img_4.src="aliens-04.png";
     }
     else if(result[0].label = "drum"){
        img_1.src="aliens-01.png";
        img_2.src="aliens-02.png";
        img_3.src="aliens-03.gif";
        img_4.src="aliens-04.png";
     }
     else if(result[0].label = "clap"){
        img_1.src="aliens-01.png";
        img_2.src="aliens-02.png";
        img_3.src="aliens-03.png";
        img_4.src="aliens-04.gif";
     }
    }

       
}