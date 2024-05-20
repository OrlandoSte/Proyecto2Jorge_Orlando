		var nocturno = false;

		async function cargaJson() {

			let url = "https://api.weatherapi.com/v1/forecast.json?key=e802f5714c9e4729848142736242504&q=Alcaniz&days=7&aqi=no&alerts=no";
			let response = await fetch(url);
			
			fetch(url)
        		.then(response => {
            if (!response.ok) {
                throw new Error('Error en el fetch' + response.status);
            }
            return response.json();
        })
			.then(data => {
			data.forecast.forecastday.forEach(dia => {
				console.log(dia.date); // Ejemplo de acceso a la fecha de cada día
				console.log(dia.day.mintemp_c);

				let diaAc = dia.date;
				let tempMin = dia.day.mintemp_c;
				let tempMax = dia.day.maxtemp_c;
				let hume = dia.day.avghumidity

				let contenido = document.getElementById("infor")
				let cajas = document.createElement("div")
				let lista = document.createElement("ul")

				let lineas = document.createElement("li")
		
				let t3 = document.createElement("h3")
				let t6 = document.createElement("h6")
				let t62 = document.createElement("h6")
				let t63 = document.createElement("h6")

				t3.textContent = "( "+diaAc+" )"
				t6.textContent = "Temp min: "+tempMin+" ºC"
				t62.textContent = "Temp max: "+tempMax+" ºC"
				t63.textContent = "Humedad: "+hume+"%"

				contenido.appendChild(cajas);
				cajas.appendChild(lista);
				lista.appendChild(lineas);
				lineas.appendChild(t3);
				lineas.appendChild(t6);
				lineas.appendChild(t62);
				lineas.appendChild(t63);

				lineas.setAttribute("class","card")
				lista.setAttribute("class","weather-cards")
				t3.setAttribute("class","textos")
				t6.setAttribute("class","textos")
				t62.setAttribute("class","textos")
				t63.setAttribute("class","textos")
				contenido.setAttribute("class","weather-data")
				cajas.setAttribute("class","days-forecast")
				


				
			});

			console.log(data.location.name)

			
			
		});
	}
		 window.onload = cargaJson();
		

		function cambiarTema() {

		    const body = document.getElementById("body")

		    if (nocturno) {
		        nocturno = false;
		        body.style.backgroundColor = "#74eaff70";

		        const titulo = document.getElementById("titulo")
		        titulo.style.backgroundColor = "#5372F0"
		        titulo.style.color = "black"

	            const ciudad = document.getElementById("ciud")
		        ciudad.style.color = "black"

	            const diaAct = document.getElementsByClassName("current-weather");
	            for (let index = 0; index < diaAct.length; index++) {
	                const element = diaAct[index];
	                element.style.backgroundColor = "#5372F0"
	            }

		        const objetos = document.getElementsByClassName("card");
		        for (let index = 0; index < objetos.length; index++) {
		         const element = objetos[index];
		         element.style.backgroundColor = "#afb9c1"
		        }

	            const textos = document.getElementsByClassName("textos");
	            for (let index = 0; index < textos.length; index++) {
	                const element = textos[index];
	                element.style.color = "black"
	            }

		    } else {
		        nocturno = true;
		        body.style.backgroundColor = "#192229";

		        const titulo = document.getElementById("titulo")
		        titulo.style.backgroundColor = "#2A3B47"
		        titulo.style.color = "#fff"

	            const ciudad = document.getElementById("ciud")
		        ciudad.style.color = "white"

	            const diaAct = document.getElementsByClassName("current-weather");
	            for (let index = 0; index < diaAct.length; index++) {
	                const element = diaAct[index];
	                element.style.backgroundColor = "#2A3B47"
	            }

		        const objetos = document.getElementsByClassName("card");
		        for (let index = 0; index < objetos.length; index++) {
		         const element = objetos[index];
		         element.style.backgroundColor = "#2A3B47"
			    }

	            const textos = document.getElementsByClassName("textos");
	            for (let index = 0; index < textos.length; index++) {
	                const element = textos[index];
	                element.style.color = "white"
	            }
			}
		}