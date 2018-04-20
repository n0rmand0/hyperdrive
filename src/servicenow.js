import manifest from "./manifest";

var serviceNowTasks;

const serviceNow = (tableName)=>{

  var requestBody = "";
  let response;

  var client=new XMLHttpRequest();
  client.open("get",tableName);

  client.setRequestHeader('Accept','application/json');
  client.setRequestHeader('Content-Type','application/json');

  //Eg. UserName="admin", Password="admin" for this code sample.
  client.setRequestHeader('Authorization', 'Basic '+btoa('Wedge.antilles'+':'+'Bl0wUp2D3ath$tars!'));

  client.onreadystatechange = function() {
  	if(this.readyState == this.DONE) {
  		// console.log( this.response);
      serviceNowTasks = (JSON.parse(this.response))
      // console.log(serviceNowTasks);

  	}
  };
  client.send(requestBody);

}


export {serviceNow, serviceNowTasks};
