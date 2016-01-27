(function(){
$("#scoreboard").hide();
$(".screens").hide();
$("#win-screen").hide();
$("#select-button").hide();
$("#lose-screen").hide();

var moveNumber = 1;
var energyStore = [];
var gameManager = {
	energy: 20,
	blocks: 7,

	init: function(){

		$("#start-game").click(function(){
			$("#fox-image").hide();
			$("#beg-screen").hide();
			$("#1-screen").show();
			$("#scoreboard").show();
			$("#energy-score").html(gameManager.energy);
			$("#blocks-score").html(gameManager.blocks);
			$("#select-button").show();
		});
	

		$("input:checkbox").click(function() {
		if ($(this).is(":checked")) {
		    var group = "input:checkbox[name='" + $(this).attr("name") + "']";
		    $(group).prop("checked", false);
		    $(this).prop("checked", true);
		} else {
		    $(this).prop("checked", false);
		}
		});


		$("#select").click(function() {
			energyStore = [];
			$("input:checkbox[name=type]:checked").each(function(){
				energyStore.push($(this).val());
			});
			$("input:checkbox[name=type2]:checked").each(function(){
				console.log(document.getElementById("select"));
				console.log($("#select"));
				console.log(this);
				console.log($(this));
				energyStore.push($(this).val());
			});
			gameManager.energy = gameManager.energy - 4;
			gameManager.energy = gameManager.energy + eval(energyStore.join('+'));
			gameManager.blocks = gameManager.blocks - 1;
			$("#" + moveNumber + '-screen').hide();
			moveNumber = moveNumber + 1;
			$("#" + moveNumber + '-screen').show();
			$("#energy-score").html(gameManager.energy);
			if (gameManager.energy <= 8) {
				$("#energy-score").css("color", "red");
			};
			$("#blocks-score").html(gameManager.blocks);

			if (gameManager.blocks === 0 && gameManager.energy >= 0) {
				$("#win-screen").show();
				$("#select-button").hide();
			}else if (gameManager.blocks >= 0 && gameManager.energy <= 0) {
				$(".screens").hide();
				$("#lose-screen").show();
				$("#select-button").hide();
			};;
		});
	}
}

gameManager.init();
})();