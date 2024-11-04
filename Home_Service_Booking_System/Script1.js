let form=document.getElementById("f1");
function validateform(){
    event.preventDefault();
    var fname=document.getElementById("Firstname").value;
    var lname=document.getElementById("Lastname").value;
    var Phoneno=document.getElementById("Phoneno").value;
    var Email=document.getElementById("inputEmail").value;
    //var pass=document.getElementById("inputPassword4").value;
    var add1=document.getElementById("inputAddress").value;
    var state=document.getElementById("inputState").value;
    var Date=document.getElementById("datefield").value;
    var time=document.getElementById("timefield").value;
    var Service=document.getElementById("inputService").value;
    var ischeck=document.getElementById("gridCheck").checked;

    var flag=true;

    if(fname==="")
    {
        flag=false;
        document.getElementById("errorp1").innerHTML="Name required";
    }
    else
    {
        document.getElementById("errorp1").innerHTML="";
    }
    if(lname==="")
    {
        flag=false;
        document.getElementById("errorp2").innerHTML="Last name required";
    }
    else
    {
        document.getElementById("errorp2").innerHTML="";
    }
    if(Phoneno==="")
    {
        flag=false;
        document.getElementById("errorp3").innerHTML="Phone no. required";
    }
    else
    {
        document.getElementById("errorp3").innerHTML="";
    }
    if(Email==="")
    {
        flag=false;
        document.getElementById("errorp4").innerHTML="Email required";
    }
    else
    {
        document.getElementById("errorp4").innerHTML="";
    }
    // if(pass==="")
    // {
    //     flag=false;
    //     document.getElementById("errorp5").innerHTML="Please Enter Password";
    // }
    // else
    // {
    //     document.getElementById("errorp5").innerHTML="";
    // }
    if(add1==="")
    {
        flag=false;
        document.getElementById("errorp6").innerHTML="Address reqquired";
    }
    else
    {
        document.getElementById("errorp6").innerHTML="";
    }
    if(state==="Choose...")
    {
        flag=false;
        document.getElementById("errorp7").innerHTML="Please select State";
    }
    else
    {
        document.getElementById("errorp7").innerHTML="";
    }
    if(Date==="")
    {
        flag=false;
        document.getElementById("errorp8").innerHTML="Select date";
    }
    else
    {
        document.getElementById("errorp8").innerHTML="";
    }
    if(time==="")
    {
        flag=false;
        document.getElementById("errorp9").innerHTML="please Select time";
    }
    else
    {
        document.getElementById("errorp9").innerHTML="";
    }
    if(Service==="Choose...")
    {
        flag=false;
        document.getElementById("errorp10").innerHTML="Please Select Service";
    }
    else
    {
        document.getElementById("errorp10").innerHTML="";
    }
    if(ischeck===false){
        flag=false;
        document.getElementById("errorp11").innerHTML="Accept terms and condition";
    }
    else{
        document.getElementById("errorp11").innerHTML="";
    }

    if(flag==true)
        acceptdata();
    return flag;
}


function acceptdata(){
    var fname=document.getElementById("Firstname").value;
    var lname=document.getElementById("Lastname").value;
    var servicetype=document.getElementById("inputService").value;
    var time=document.getElementById("timefield").value;
    var date=document.getElementById("datefield").value;
    var phone=document.getElementById("Phoneno").value;
    
    sessionStorage.setItem("type",servicetype);
    sessionStorage.setItem("Date",date);
    sessionStorage.setItem("Time",time);
    sessionStorage.setItem("name",fname);
    sessionStorage.setItem("lname",lname);
    sessionStorage.setItem("phone",phone);
    window.location.href="Jobtracker.html";
}

