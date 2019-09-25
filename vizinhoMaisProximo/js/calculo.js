// Masanori Iha RA 082150238
main(); 

function pegaCaminhosdaBasePorId(id, rota){
	return filtraRotaExistente(matriz.find(cidade => pegaCidade(cidade, id)).caminhos, rota);	
}

function filtraRotaExistente(obj, rota) {
	return obj.filter(caminho => filtro(rota, caminho))
}

function pegaCidade(cidade, id){
	if(cidade.id == id) return cidade
}

function isrotaValid(rota) {
	return rota.passos
			.map(passo => passo.destino)
			.filter((passo, index, arr) => validaPassos(passo, index, arr)).length == matriz.length
}

function validaPassos(passo, index, arr){
	return arr.indexOf(passo) == index
}

function validaterota(rota){
	if(rota.cidadeAtual == 1)
		if(isrotaValid(rota)) 
			return true
}

function filtro(rota, caminho){
	var arr = rota.passos.map(passo => passo.destino);
	return isExistsRounte(arr, caminho)? false:true
}

function isExistsRounte(arr, caminho){
	if(arr.indexOf(caminho.destino) !== -1) return true
	return false
}

function MontaPesos(rotaPeso, caminhoPeso){
	return rotaPeso + caminhoPeso
}

function MontaPassosRealizados(rota, cidadeAtual, destino, peso){
	var temp = { origem: cidadeAtual, destino: destino, peso: peso };
	return rota.passos.concat(temp)
}

function teste(rota){
	return  pegaCaminhosdaBasePorId(rota.cidadeAtual, rota)
}

function ordenaResultados(results){
	var t = results.sort((a, b) => b.peso - a.peso)[results.length-1];

	for(var i = 0; i< t.passos.length; i++) 
		melhorCaminho.push(t.passos[i].destino + ', ')
	
	return "Melhor custo: " + t.peso + " rota: " + melhorCaminho
}

function imprimeResultados(){
	console.log(ordenaResultados(caminhosConsolidados))
}

function montaObjetoCidade(caminho, rota) {
	return { cidadeAtual: caminho.destino, peso: MontaPesos(rota.peso, caminho.peso), passos: MontaPassosRealizados(rota, rota.cidadeAtual, caminho.destino, caminho.peso) }
}

function consolidaResultados() {
		rotas = rotas.map(rota => 
						filtraRotaExistente(teste(rota), rota) 
        			 	.map(caminho => montaObjetoCidade(caminho, rota))).flat();

    	caminhosConsolidados.push(...rotas.filter(validaterota));
}

function main (){
	for(var i=0; i<5000000;i++){
		consolidaResultados(); 
	}
}

imprimeResultados();