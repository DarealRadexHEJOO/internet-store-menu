$(document).ready( () => {
	
	var zakup;
	
	zakup = {
		name: data.product.name,
		price: data.sizes.items.U.price,
		size: data.sizes.items.U.name,
		variant: data.multiversions[0].items["1-1"].values[61].name,
		quantity: 1,
		status: data.sizes.items.U.status,
		totalcost: 0
	};
	
	console.log(data);
	console.log(zakup);
	
	$("#b-1").click( () => {
		$("#pp-1").slideToggle();
	});
	
	$("#pop-up-x").click( () => {
		$("#pp-1").slideUp();
	});
	
	$("#nazwa").text(data.product.name);
	
	$("#rozmiar-a").text(data.sizes.items.U.name);
	$("#rozmiar-b").text(data.sizes.items.V.name);
	$("#rozmiar-c").text(data.sizes.items.W.name);
	
	$("#rozmiar-a").click( () => {
		zakup.size = data.sizes.items.U.name;
		$("#rozmiar-a").css("border", "2px solid #0090F6");
		$("#rozmiar-b").css("border", "1px solid #C3C7C8");
		$("#rozmiar-c").css("border", "1px solid #C3C7C8");
		
		zakup.price = data.sizes.items.U.price;
		$("#cena").text((data.sizes.items.U.price.toFixed(2)).replace(".", ",") + "zł");
		
		zakup.status = data.sizes.items.U.status;
		$("#dost-txt").text(data.sizes.items.U.status);
		if (data.sizes.items.U.status == "Produkt dostępny") {
			$("#dost-im").attr("src", "resources/ok@1X.png");
		} else if (data.sizes.items.U.status == "Produkt niedostępny") {
			$("#dost-im").attr("src", "resources/not-ok@1X.png");
		}
	});
	$("#rozmiar-b").click( () => {
		zakup.size = data.sizes.items.V.name;
		$("#rozmiar-a").css("border", "1px solid #C3C7C8");
		$("#rozmiar-b").css("border", "2px solid #0090F6");
		$("#rozmiar-c").css("border", "1px solid #C3C7C8");
		
		zakup.price = data.sizes.items.V.price;
		$("#cena").text(data.sizes.items.V.price.toFixed(2).replace(".", ",") + "zł");
		
		zakup.status = data.sizes.items.V.status;
		$("#dost-txt").text(data.sizes.items.V.status);
		if (data.sizes.items.V.status == "Produkt dostępny") {
			$("#dost-im").attr("src", "resources/ok@1X.png");
		} else if (data.sizes.items.V.status == "Produkt niedostępny") {
			$("#dost-im").attr("src", "resources/not-ok@1X.png");
		}
	});
	$("#rozmiar-c").click( () => {
		zakup.size = data.sizes.items.W.name;
		$("#rozmiar-a").css("border", "1px solid #C3C7C8");
		$("#rozmiar-b").css("border", "1px solid #C3C7C8");
		$("#rozmiar-c").css("border", "2px solid #0090F6");
		
		zakup.price = data.sizes.items.W.price;
		$("#cena").text(data.sizes.items.W.price.toFixed(2).replace(".", ",") + "zł");
		
		zakup.status = data.sizes.items.W.status;
		$("#dost-txt").text(data.sizes.items.W.status);
		if (data.sizes.items.W.status == "Produkt dostępny") {
			$("#dost-im").attr("src", "resources/ok@1X.png");
		} else if (data.sizes.items.W.status == "Produkt niedostępny") {
			$("#dost-im").attr("src", "resources/not-ok@1X.png");
		}
	});
	
	$("#wariant-a").text(data.multiversions[0].items["1-1"].values[61].name);
	$("#wariant-b").text(data.multiversions[0].items["1-2"].values[60].name);
	$("#wariant-c").text(data.multiversions[0].items["1-3"].values[59].name);
	$("#warianty").change( () => {
		zakup.variant = $("#warianty option:selected").text();
		if ($("#warianty option:selected").text() == "Srebrny") {
			$("#console-pic").attr("src", "resources/xbox-srebrny.png");
		} else if ($("#warianty option:selected").text() == "Czarny") {
			$("#console-pic").attr("src", "resources/xbox-czarny.png");
		} else if ($("#warianty option:selected").text() == "Biały") {
			$("#console-pic").attr("src", "resources/xbox-bialy.png");
		}
	});
	
	$("#counter").text(zakup.quantity);
	$("#minus").click( () => {
		if (zakup.quantity > 1) {
			zakup.quantity -= 1;
		}
		$("#counter").text(zakup.quantity);
	});
	$("#plus").click( () => {
		if (zakup.quantity < 9) {
			zakup.quantity += 1;
		}
		$("#counter").text(zakup.quantity);
	});
	
	$("#dodaj").click( () => {
		if (zakup.status == "Produkt dostępny") {
			zakup.totalcost = zakup.price * zakup.quantity;
			alert(
			    zakup.name +
				"\n" +
				"\n" +
				"Cena za sztukę: " + zakup.price.toFixed(2).replace(".", ",") + "zł" +
				"\n" +
				"\n" +
				"Rozmiar: " + zakup.size +
				"\n" +
				"\n" +
				"Wariant: " + zakup.variant +
				"\n" +
				"\n" +
				"Ilość sztuk: " + zakup.quantity +
				"\n" +
				"\n" +
				"Łącznie do zapłaty: " + zakup.totalcost.toFixed(2).replace(".", ",") + "zł"
			);
		} else if (zakup.status == "Produkt niedostępny") {
			alert("Produkt niedostępny");
		}
	});
	
	$("#rozmiar-a").trigger("click");
	
});