$(document).ready(function(){
    var s1 = 1;
    function slid()
    {
        s1+=1;
        if(s1==6)
        {
            s1=1;

        }
        $("#section0").css("background","url(./lesmages/imageslide"+s1+".jpg) center");
    }
 
    setInterval(slid,3000);
});
