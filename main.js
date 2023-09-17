const populate = async (base, value) => {
  let myStr = "";
  url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_WpVM9U1FjCDmQwW5nfLyHrWLmiCit5EQWkh0zxBh&base_currency=${base}`;
  let response = await fetch(url);
  let responseJson = await response.json();
  document.querySelector(".output").style.display="block"
  
  for (let key of Object.keys(responseJson["data"])) {
    myStr += `<tr>
        <td>${key}</td>
        <td>${responseJson["data"][key]["value"]}</td>
        <td>${responseJson["data"][key]["value"]*value}</td>
    </tr>`;
  }
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = myStr;
};
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  
  var value = parseInt(document.querySelector("input[name='quantity']").value);
  
  var base = document.querySelector("select").value;
  

  populate(base, value);
});
