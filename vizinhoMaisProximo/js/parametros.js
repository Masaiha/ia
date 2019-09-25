let caminhosConsolidados = [];
let melhorCaminho = [];
let partida = 1;
let pesoPartida = 0;
let rotas = [{ cidadeAtual: partida, peso: pesoPartida, passos: [] }];

var matriz = [
	{
		id: 1,
		caminhos: [
			{ destino: 2, peso: 20 },
			{ destino: 8, peso: 29 },
			{ destino: 12, peso: 29 },
			{ destino: 13, peso: 37 },
		]
	},
	{
		id: 2,
		caminhos: [
			{ destino: 1, peso: 20 },
			{ destino: 3, peso: 25 },
			{ destino: 8, peso: 28 },
			{ destino: 12, peso: 39 },
		]
	},
	{
		id: 3,
		caminhos: [
			{ destino: 2, peso: 25 },
			{ destino: 8, peso: 30 },
			{ destino: 4, peso: 25 },
			{ destino: 13, peso: 54 },
		]
	},
	{
		id: 4,
		caminhos: [
			{ destino: 3, peso: 25 },
			{ destino: 5, peso: 39 },
			{ destino: 6, peso: 32 },
			{ destino: 7, peso: 42 },
			{ destino: 9, peso: 23 },
			{ destino: 10, peso: 33 },
			{ destino: 14, peso: 56 },
		]
	},
	{
		id: 5,
		caminhos: [
			{ destino: 4, peso: 39 },
			{ destino: 6, peso: 12 },
			{ destino: 7, peso: 26 },
			{ destino: 10, peso: 19 },
		]
	},
	{
		id: 6,
		caminhos: [
			{ destino: 4, peso: 32 },
			{ destino: 5, peso: 12 },
			{ destino: 7, peso: 17 },
			{ destino: 10, peso: 35 },
			{ destino: 11, peso: 30 },
		]
	},
	{
		id: 7,
		caminhos: [
			{ destino: 4, peso: 42 },
			{ destino: 5, peso: 26 },
			{ destino: 6, peso: 17 },
			{ destino: 11, peso: 38 },
		]
	},
	{
		id: 8,
		caminhos: [
			{ destino: 1, peso: 29 },
			{ destino: 2, peso: 28 },
			{ destino: 3, peso: 30 },
			{ destino: 12, peso: 25 },
			{ destino: 13, peso: 22 },
		]
	},
	{
		id: 9,
		caminhos: [
			{ destino: 4, peso: 23 },
			{ destino: 10, peso: 26 },
			{ destino: 13, peso: 34 },
			{ destino: 14, peso: 37 },
			{ destino: 16, peso: 43 },
		]
	},
	{
		id: 10,
		caminhos: [
			{ destino: 4, peso: 33 },
			{ destino: 5, peso: 19 },
			{ destino: 6, peso: 35 },
			{ destino: 9, peso: 26 },
			{ destino: 11, peso: 24 },
			{ destino: 14, peso: 30 },
			{ destino: 15, peso: 19 },
		]
	},
	{
		id: 11,
		caminhos: [
			{ destino: 6, peso: 30 },
			{ destino: 7, peso: 38 },
			{ destino: 10, peso: 24 },
			{ destino: 15, peso: 26 },
			{ destino: 18, peso: 36 },
		]
	},
	{
		id: 12,
		caminhos: [
			{ destino: 1, peso: 29 },
			{ destino: 2, peso: 39 },
			{ destino: 8, peso: 25 },
			{ destino: 13, peso: 27 },
			{ destino: 16, peso: 43 },
		]
	},
	{
		id: 13,
		caminhos: [
			{ destino: 1, peso: 37 },
			{ destino: 3, peso: 54 },
			{ destino: 8, peso: 22 },
			{ destino: 9, peso: 34 },
			{ destino: 12, peso: 27 },
			{ destino: 14, peso: 24 },
			{ destino: 16, peso: 19 },
		]
	},
	{
		id: 14,
		caminhos: [
			{ destino: 4, peso: 56 },
			{ destino: 9, peso: 37 },
			{ destino: 10, peso: 30 },
			{ destino: 13, peso: 24 },
			{ destino: 15, peso: 20 },
			{ destino: 16, peso: 19 },
			{ destino: 17, peso: 17 },
		]
	},
	{
		id: 15,
		caminhos: [
			{ destino: 10, peso: 19 },
			{ destino: 11, peso: 26 },
			{ destino: 14, peso: 20 },
			{ destino: 17, peso: 18 },
			{ destino: 18, peso: 21 },
		]
	},
	{
		id: 16,
		caminhos: [
			{ destino: 9, peso: 43 },
			{ destino: 12, peso: 43 },
			{ destino: 13, peso: 19 },
			{ destino: 14, peso: 19 },
			{ destino: 17, peso: 26 },
		]
	},
	{
		id: 17,
		caminhos: [
			{ destino: 14, peso: 17 },
			{ destino: 15, peso: 18 },
			{ destino: 16, peso: 26 },
			{ destino: 18, peso: 15 },
		]
	},
	{
		id: 18,
		caminhos: [
			{ destino: 11, peso: 36 },
			{ destino: 15, peso: 21 },
			{ destino: 17, peso: 15 },
		]
	},
];