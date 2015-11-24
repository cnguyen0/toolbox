$(function() {
	'use strict';

	var clientId = 'b98d0531a4a4dca';
	var json; // initiate
	var allCats = [];
	var countCats = 0;

	$.ajax({
	    type: "GET",
	    url: "https://api.imgur.com/3/album/PAKqy/images",
	    dataType: "text",
	    beforeSend: function(xhr) {
	        xhr.setRequestHeader('Authorization', 'Client-ID b98d0531a4a4dca');
	    },
	    success: function(data) {
	        var betterData = JSON.parse(data);
	        console.log(betterData);
	        allCats = ($.parseJSON(data)).data.map(function(item) {
			    return {title: item.title, description: item.description, link: item.link};
	        });	

	        return showCat(allCats);
	    }
	});

	function showCat (item) {
		allCats = item;
		countCats = allCats.length;

		$('#displayCat').velocity({
			rotateZ: "0"
		});

		if (countCats == 0) {
			$('#displayCat').attr('src', 'img/none-available.jpg');
			$('.bg-danger').show();
			$('#displayDescription').hide();
			$('#displayTitle').hide();

		} else {

			var randomNum = Math.floor(Math.random() * countCats);
			var catObj = allCats[randomNum];

			allCats.splice(randomNum, 1);

			$('#displayDescription').text(catObj.description);
			$('#displayTitle').text(catObj.title);
			$('#displayCat').attr('src', catObj.link);
		}
	}

	$(document.getElementById('no'))
		.click(function() {
			$('#displayCat').velocity({
				  rotateZ: "180deg"
			});

			return showCat(allCats);
	});

	$(document.getElementById('yes'))
		.click(function() {
			$('#displayCat').velocity({
				  rotateZ: "-180deg"
			});

			return showCat(allCats);
	});
});