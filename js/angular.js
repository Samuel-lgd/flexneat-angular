
var app = angular.module('flexneat',[]);
app.controller('controller', function($scope){
	$scope.max = 5					//Nombre max de card par catégories, home.html

	$scope.search = "titre"			//Utilisé pour avoir la selection de l'user sur un menu déroulant
	$scope.searchText = ""			//Utilisé pour avoir l'entrée de l'user sur une barre de recherche

	$scope.rewatch = "rewatch"
	$scope.watching = "watching"

	$scope.searchGenre = "Tous les genres"
	$scope.genres = ["Action", "Aventure", "Ado", "Policier", "Animation", "Horreur", "Dystopie", "Drame", "Thriller", "Science-fiction", "Comédie"
	];										//Liste des genres utilisés pour la selection, genres.html

	$scope.video = ""
	$scope.setTitle = function(titre){		//Utilisé pour attribuer le titre d'un video à la recherche lors d'un clic, admins.html
		$scope.video = titre
	}
	
	$scope.motive = ""
	$scope.verif = function(){				//Vérification si un motif a bien été rentré, admins.html
		if ($scope.motive == ""){
			alert("Veuillez entrer un motif")
		}
	} 

	$scope.flecheHaut = true
	$scope.flecheBas = false				//Affiche ou non la flèche vers le haut / bas ,home.html
	$scope.label = "Cacher"
	
	$scope.hideContent = function(categorie){			//Permet de cacher une catégorie avec une animation via des classes, home.html
		card1 = document.getElementById(categorie +"0")
		card2 = document.getElementById(categorie +"1")	//je n'ai pas trouvé comment utiliser querySelectorAll('#id1, #id2, #id3, ... ') pour
		card3 = document.getElementById(categorie +"2")	//avoir plusieurs id, du coup j'attribue les cards 1 par 1 à une variable	
		card4 = document.getElementById(categorie +"3")
		card5 = document.getElementById(categorie +"4")

		if ($scope.flecheHaut == true){
			$scope.label = "Afficher"
			$scope.flecheBas = true
			$scope.flecheHaut = false
			card1.className = "card hideCard"
			card2.className = "card hideCard"
			card3.className = "card hideCard"
			card4.className = "card hideCard"
			card5.className = "card hideCard"
		}
		else{											//Attribution ou non de la class hideCard pour animer la disparition des card
			$scope.label = "Cacher"
			$scope.flecheBas = false
			$scope.flecheHaut = true 
			card1.className = "card"
			card2.className = "card"
			card3.className = "card"
			card4.className = "card"
			card5.className = "card"
		}
	} 

	$scope.categories = [
		{name :"Nouveautés", id : "new"},
		{name : "Les plus regardées", id : "trending"},		//Utilisé dans le menu déroulant "Catégories" du haut
		{name : "A Terminer", id :"watching"},
		{name : "A revoir", id :"rewatch"}
	 
	];

	$scope.results = function(resultLength){					//Affichage du message d'erreur dans les pages "catégories"
		if($scope.searchText.length >= 5 && resultLength == 0){	//resultLength = nombre de divs affichées par le ng-repeat
			return true
		}
		else{
			return false
		}
	}

	//####################//
	//BASES DONNEES VIDEOS//
	//####################//

	$scope.videos = [
	{														//J'ai pas trouvé comment utiliser le format .json, donc j'ai tout placé dans une liste
		titre : "Stranger things",
		realisateur : "The duffer brothers",
		auteur : "The duffer brothers",
		annee : "2016",
		genre : "science-fiction • drame • horreur",
		description : "En 1983, à Hawkins dans l'Indiana, Will Byers disparaît de son domicile. Ses amis se lancent alors dans une recherche semée d'embûches pour le retrouver. Pendant leur quête de réponses, les garçons rencontrent une étrange jeune fille en fuite.",
		statut : "rewatch", /*en cours - a revoir */
		new : "true",
		trending : "true",
		acteur : "",
		img : "img/videos/stranger_things.jpg"},
	{
		titre : "Breaking Bad",
		realisateur : "Mark Johnson",
		auteur : "Vince Gillian",
		annee : "2008",
		genre : "drame • policier",
		description : "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique. Pour réunir de l'argent afin de subvenir aux besoins de sa famille, Walter met ses connaissances en chimie à profit pour fabriquer et vendre du crystal meth.",
		statut : "rewatch watching", /*en cours - a revoir */
		new : "false",
		trending : "true",
		acteur : "",
		img : "img/videos/breaking_bad.jpg"},

	{
		titre : "Prison Break",
		realisateur : "Marty Adelstein",
		auteur : "Paul Scheuring",
		annee : "2005",
		genre : "drame • policier • action",
		description : "Son frère injustement accusé de meurtre, un ingénieur en génie civil décide de le faire évader de prison. Son frère injustement accusé de meurtre, un ingénieur en génie civil décide de le faire évader de prison.",
		statut : "rewatch", /*en cours - a revoir */
		new : "False",
		trending : "true",
		acteur : "",
		img : "img/videos/prison_break.jpg"},

	{
		titre : "Outer Banks",
		realisateur : "Josh and Jonas Pate",
		auteur : "Josh and Jonas Pate",
		annee : "2020",
		genre : "drame • aventure • ado ",
		description : "Un adolescent demande à ses trois meilleurs amis de partir à la recherche d'un trésor légendaire lié à la disparition de son père. Cependant, cette aventure s'avère être un danger pour toutes les personnes impliquées.",
		statut : "rewatch",/*en cours - a revoir */
		new : "true",
		trending : "False",
		acteur : "",
		img : "img/videos/outer_banks.jpg"},

	{
		titre : "Black Mirror",
		realisateur : "Anabel Jones",
		auteur : "Charlie Brooker",
		annee : "2014",
		genre : "dystopie • antologie • science-fiction",
		description : "Chaque épisode a un casting différent, un décor différent et une réalité différente, mais ils traitent tous de la façon dont nous vivons maintenant, et de la façon dont nous pourrions vivre dans dix minutes si nous sommes maladroits.",
		statut : "rewatch", /*en cours - a revoir */
		new : "true",
		trending : "false",
		acteur : "",
		img : "img/videos/black_mirror.jpg"},

	{
		titre : "Arcane",
		realisateur : "Christian Linkee",
		auteur : "Marc Merill",
		annee : "2021",
		genre : "animation • action",
		description : "Au milieu du conflit entre les villes jumelles de Piltover et Zaun, Au milieu du conflit entre les villes jumelles de Piltover et Zaun, deux soeurs se battent dans les camps opposés d'une guerre entre technologies magiques et convictions incompatibles.",
		statut : "watching", /*en cours - a revoir */
		new : "false",
		trending : "true",
		acteur : "AUCUNLOL",
		img : "img/videos/arcane.jpg"},

{
		titre : "Peaky Blinders",
		realisateur : "Katie Swinden",
		auteur : "Steven Knight",
		annee : "2013",
		genre : "historique • drame • action",
		description : "Birmingham, en 1919. Un gang familial règne sur un quartier de la ville : les Peaky Blinders, ainsi nommés pour les lames de rasoir qu'ils cachent dans la visière de leur casquette. Birmingham, en 1919. Un gang familial règne sur un quartier de la ville : les Peaky Blinders, ainsi nommés pour les lames de rasoir qu'ils cachent dans la visière de leur casquette.",
		statut : "watching", /*en cours - a revoir */
		new : "true",
		trending : "none",
		acteur : "",
		img : "img/videos/peaky_blinders.jpg"},

{
		titre : "Squid Game",
		realisateur : " Siren Pictures Inc.",
		auteur : " 	Hwang Dong-hyeok",
		annee : "2021",
		genre : "thriller • drame • dystopie",
		description : "Des personnes en difficultés financières sont invitées à une mystérieuse compétition de survie. Participant à une série de jeux traditionnels pour enfants, mais avec des rebondissements mortels, elles risquent leur vie pour une grosse somme d'argent.",
		statut : "watching", /*en cours - a revoir */
		new : "true",
		trending : "true",
		acteur : "",
		img : "img/videos/squid_game.jpg"},

{
		titre : "Friends",
		realisateur : "David Crane",
		auteur : " 	Marta Kauffman",
		annee : "1994",
		genre : "comédie • sitcom • ado",
		description : "Les péripéties de trois jeunes femmes et trois jeunes hommes new-yorkais liés par une profonde amitié. Entre amour, travail, famille, ils partagent leurs bonheurs et leurs soucis au Central Perk, leur café favori.",
		statut : "watching", /*en cours - a revoir */
		new : "true",
		trending : "true",
		acteur : "",
		img : "img/videos/friends.jpg"},

	{
		titre : "La Casa de Papel",
		realisateur : "Vancouver Media",
		auteur : "Alex Pina",
		annee : "2019",
		genre : "thriller • drame • braquage",
		description : "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution. Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",
		statut : "watching rewatch", /*en cours - a revoir */
		new : "true",
		trending : "true",
		acteur : "",
		img : "img/videos/casa_papel.jpg"},

	];

});