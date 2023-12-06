

/*export const createFilter  = document.querySelector(".containerButtons")*/



export default function() {

    const createFilterJobs = document.querySelector(".containerButtons")
    
    const buttonName = ["Tous", "Objets", "Appartements", "Hôtels & Restaurants"];

    console.log(buttonName.length); // 2
    console.log(buttonName[0]); // "Apple"

	for (let i = 0; i < 4; i++) { // repete slides.lenght fois
		const button = document.createElement("button") // cré une 'div'
		button.classList.add("styleFont") // ajoute une class 'dot' dans la 'div'
        button.classList.add("styleShape") // ajoute une class 'dot' dans la 'div'
        /*button.id = "myButton";*/
        button.type = "button";
        button.innerText = buttonName[i];
        /*button.innerText = "Click Me";*/
        
        createFilterJobs.appendChild(button) // ajoute le tout entre le container('div) avec la class "dots"
    }
}
/*  LE BON code de sheCodes AI
const button = document.createElement("button");

document.body.appendChild(button);
*/






