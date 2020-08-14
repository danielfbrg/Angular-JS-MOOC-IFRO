angular.module('aplicacao').controller('Listagem-alunos-controller', function($scope, $filter, AlunosCollectionService){
	$scope.nome = 'Daniel Ferraz';
	var nome = "Lá Lá Lá";
	
	$scope.iniciado = true;
	
	$scope.alunos = AlunosCollectionService.getAlunos();

	$scope.hoje = new Date();
	
	$scope.finalizar = function() {
		$scope.iniciado = false;
	};
	
	$scope.iniciar = function() {
		$scope.iniciado = true;
	};

	$scope.ordenarPorNome = function(){
		AlunosCollectionService.ordenarPorNome();
		$scope.alunos = AlunosCollectionService.getAlunos();
	}

	$scope.ordenarPorIdade = function(){
		AlunosCollectionService.ordenarPorIdade();
		$scope.alunos = AlunosCollectionService.getAlunos();
	}



});