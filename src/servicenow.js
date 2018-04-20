import manifest from "./manifest";

const serviceNow = (tableName)=>{

  var requestBody = "";
  let response;

  var client=new XMLHttpRequest();
  client.open("get","https://pncmelliniumfalcon.service-now.com/api/now/table/"+tableName+"/0e4aa80adb211b00547cf438bf961934");

  client.setRequestHeader('Accept','application/json');
  client.setRequestHeader('Content-Type','application/json');

  //Eg. UserName="admin", Password="admin" for this code sample.
  client.setRequestHeader('Authorization', 'Basic '+btoa('Wedge.antilles'+':'+'Bl0wUp2D3ath$tars!'));

  client.onreadystatechange = function() {
  	if(this.readyState == this.DONE) {
  		// console.log( this.response);
      manifest[tableName]=JSON.parse(this.response);
      // console.log(manifest);
  	}
  };
  client.send(requestBody);

}


export default serviceNow;
