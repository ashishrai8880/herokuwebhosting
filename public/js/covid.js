
const getCovidData = async () => {
    const list = await fetch("https://data.covid19india.org/data.json");
    const jsonData = await list.json();
    const stateWise = jsonData.statewise;

    let stateList = document.getElementById('stateList');

    html = "";
    stateWise.map(curElement => {
        html = html + `
        <tr>
            <td>${curElement.state}</td>
            <td>${curElement.confirmed}</td>
            <td>${curElement.recovered}</td>
            <td>${curElement.deaths}</td>
            <td>${curElement.active}</td>
            <td>${curElement.lastupdatedtime}</td>
        </tr>
        `
    });

    stateList.innerHTML += html;

}

getCovidData();