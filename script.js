let moves = 0;
let table; 
let rows; 
let columns;
let tileMoves;
let boardArr;
let bG;

function buttonStart(){
	let picture1 = document.getElementById("pic1");
	picture1.addEventListener("click", gameStart, false);

	let picture2 = document.getElementById("pic2");
	picture2.addEventListener("click", gameStart, false);

	let picture3 = document.getElementById("pic3");
	picture3.addEventListener("click", gameStart, false);

	let picture4 = document.getElementById("pic4");
	picture4.addEventListener("click", gameStart, false);
  
	document.getElementById("winner").innerHTML=" ";
	tileMoves = document.getElementById("moves");
	table = document.getElementById("table");
	rows = 4;
	columns = 4;
	checkers = 0;
	gameStart();
}

function gameStart(){
	let numArr = new Array();
	let numUsed;
	let randd = 0;
	let co = 0;
	moves = 0;
	rows = 4;
	columns = 4;
	tileMoves.innerHTML = moves;
	boardArr = new Array(rows);
	
	for (let i = 0; i < rows; i++) {
		boardArr[i] = new Array(columns);
	}

	numUsed = new Array( rows * columns );
	for (let i = 0; i < rows * columns; i++){
		numUsed[i] = 0;
	}
 
	for (let i = 0; i < rows * columns; i++){
		randd = Math.floor(Math.random()*rows * columns);
		if (numUsed[randd] == 0) {
			numUsed[randd] = 1;
			numArr.push(randd);
		} else {
			i--;
		}
	}
  
	co = 0;
	for (let i = 0; i < rows; i++){
		for (let j = 0; j < columns; j++){
			boardArr[i][j] = numArr[co];
      
			co++;
		}
	}
	
	let picture1 = document.getElementById("pic1");
	picture1.addEventListener("click", function(){
		bG = 'style = \"background-image: url(background1.png)\"';
		board(bG);
    });
	
	let picture2 = document.getElementById("pic2");
	picture2.addEventListener("click", function(){
		bG = 'style = \"background-image: url(background2.png)\"';
		board(bG);
	});
  
	let picture3 = document.getElementById("pic3");
	  picture3.addEventListener("click", function(){
		bG = 'style = \"background-image: url(background3.png)\"';
		board(bG);
    });
	
	let picture4 = document.getElementById("pic4");
	picture4.addEventListener("click", function(){
		bG = 'style = \"background-image: url(background4.png)\"';
		board(bG);
    });
}

function movingTile(rRow, cColumn){
	if (movableCheck(rRow, cColumn, "up") ||
		movableCheck(rRow, cColumn, "down") ||
		movableCheck(rRow, cColumn, "left") ||
		movableCheck(rRow, cColumn, "right") ){
    increment();
	} else {
		alert("Nope! You can't move this");
	}
    
	if (winnerCheck()){
		alert("You Won! in: " + moves + " moves.");
		document.getElementById("winner").innerHTML="Winner Winner!";
		gameStart();
	}
}

function board(bG){ 
	let result = "";

	for (let i = 0; i < rows; i++){
		result += "<tr>";
		for (let j = 0; j < columns; j++){
			if (boardArr[i][j] == 0){
				result += "<td class=\"blank\"> </td>";
			}
			if (boardArr[i][j] == 1){
				result += "<td class=\"tile1\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j] +  "</td>";
			}
			if (boardArr[i][j] == 2){
				result +="<td class=\"tile2\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>" ;
			}
			if (boardArr[i][j] == 3){
				result +="<td class=\"tile3\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
			if (boardArr[i][j] == 4){
				result +="<td class=\"tile4\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
			if (boardArr[i][j] == 5){
				result +="<td class=\"tile5\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
			if (boardArr[i][j] == 6){
				result +="<td class=\"tile6\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
			if (boardArr[i][j] == 7){
				result +="<td class=\"tile7\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
			if (boardArr[i][j] == 8){
				result +="<td class=\"tile8\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
			if (boardArr[i][j] == 9){
				result +="<td class=\"tile9\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
			if (boardArr[i][j] == 10){
				result +="<td class=\"tile10\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
			if (boardArr[i][j] == 11){
				result +="<td class=\"tile11\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
			if (boardArr[i][j] == 12){
				result +="<td class=\"tile12\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
			if (boardArr[i][j] == 13){
				result +="<td class=\"tile13\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
			if (boardArr[i][j] == 14){
				result +="<td class=\"tile14\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
			if (boardArr[i][j] == 15){
				result +="<td class=\"tile15\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
			}
		} 
		result += "</tr>";
	}
  
	table.innerHTML = result;
}

function movableCheck(coordRow, coordCol, location){
	setRow = 0;
	setCol = 0;
	if (location == "up"){
		setRow = -1;
	}
	else if (location == "down"){
		setRow = 1;
	}
	else if (location == "left"){
		setCol = -1;
	}
	else if (location == "right"){
		setCol = 1;
	}  
  
	if (coordRow + setRow >= 0 && coordCol + setCol >= 0 && coordRow + setRow < rows && coordCol + setCol < columns){
		if ( boardArr[coordRow + setRow][coordCol + setCol] == 0){
			boardArr[coordRow + setRow][coordCol + setCol] = boardArr[coordRow][coordCol];
			boardArr[coordRow][coordCol] = 0;
			board(bG);
			return true;
		}
	}
	return false; 
}

function winnerCheck(){
	var co = 1;
	for (let i = 0; i < rows; i++){
		for (let j = 0; j < columns; j++){
			if (boardArr[i][j] != co){
				if ( !(co === rows * columns && boardArr[i][j] === 0 )){
					return false;
				}
			}
		co++;
		}
	}
  
	return true;
}

function increment(){
	moves++;
	if (tileMoves){
		tileMoves.innerHTML = moves;
	}
}

window.addEventListener("load", buttonStart, false); 