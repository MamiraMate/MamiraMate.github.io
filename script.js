let gomb_szamlalo = 0;
let nyomogomb = document.querySelector('#shopgomb');
nyomogomb.addEventListener('click', gomb);

function gomb() {
	if (gomb_szamlalo == 5) {
		alert("Még hányszor mondjam meg neked? \n Inkább kimásolom a vágólapodra és mentsd el valahol.");
		navigator.clipboard.writeText("Budapest, Árpád út 52, 1042 ; Budapest, Andrássy út 45, 1061");
	} else {
		alert("A boltjaink:\n-Budapest, Árpád út 52, 1042\n-Budapest, Andrássy út 45, 1061");
		gomb_szamlalo++;
	}
}
