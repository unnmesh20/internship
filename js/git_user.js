var form= document.getElementById("myForm");


form.addEventListener('submit',function(e){

    var search=document.getElementById("search").value;
    
    var original_name=search.split(' ').join('');
        //alert(original_name);
    fetch("https://api.github.com/user"+original_name)
    .then((result)=>result.json())
    .then((data)=>{
        console.log(data);
        console.log("ABC");
        document.getElementById("result").innerHTML=`
        <a targer="_blank" href="https://www.github.com/${original_name}"><img src="${data.avatar_url}"/ alt="images/elon.jpg"></a> 
        `
    });

})