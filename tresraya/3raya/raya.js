let jugador = "X";
		let final = false;
		let tablero = ["", "", "", "", "", "", "", "", ""];
  
		
		let cajas = document.getElementsByClassName("box");
		for (let i = 0; i < cajas.length; i++) {
			cajas[i].addEventListener("click", function() {
				if (!final && tablero[i] === "") {
					tablero[i] = jugador;
					cajas[i].innerText = jugador;
					checkPosiciones();
					jugador = jugador === "X" ? "O" : "X";
				}
			});
		}

		
		function checkPosiciones() {
			let posicionGanador = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6]
			];

			for (let i = 0; i < posicionGanador.length; i++) {
				let [a, b, c] = posicionGanador[i];
				if (tablero[a] !== "" && tablero[a] === tablero[b] && tablero[b] === tablero[c]) {
					alert(`${jugador} es el ganador`);
					final = true;
					location.reload();
				}
			}

	
			if (!tablero.includes("")) {
				alert("Empate");
				final = true;
			}
		}