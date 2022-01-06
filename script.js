var box= document.createElement('div');
box.setAttribute('id','box');
box.innerHTML=brewery();
var data= document.createElement('div');
data.setAttribute('id','result');
async function brewery(){
    try {
        let res= await fetch(`https://api.openbrewerydb.org/breweries`);
        let result= await res.json();
        console.log(result);
        for(var i in result){
            //given 1 because only the last jason data is visible in the HTML and it has not details about the website
            var name = result[i].name;
            console.log(name);
            var type = result[i].brewery_type;
            console.log(type);
            var address= `${result[1].street},${result[i].city},${result[i].state},${result[i].country},${result[i].postal_code}.`;
            console.log(address);
            var website = result[1].website_url;
            //given 1 because only the last jason data is visible in the HTML
            console.log(website);
            var phone = result[1].phone;
            console.log(phone);
            console.log("-----------------------------------------------------------------------------------------");
            data.innerHTML=`=>The name of the brewary is ${name}. <br>
            =>Type of the brewery is ${type}. <br>
            =>Address of brewery: ${address}. <br>
            =>Website of brewery:  <a href="${website}"target=_blank>Website link</a>. <br>
            =>Contact number: ${phone}.`;
            document.body.append(data); 
           }
           
    } catch (error) {
        console.log(error);
    }
}

function div(){
 document.createElement('div');

}
document.body.append(box);