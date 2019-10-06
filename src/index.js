'use strict';
import actionPage from "./modules/actionPage";
import renderCards from "./modules/renderCards";
import renderCatalogue from "./modules/renderCatalogue";
import addCart from "./modules/addCart";
import toggleCart from "./modules/toggleCart";
import toggleCheckbox from "./modules/toggleCheckbox";
import getData from "./modules/getData";

// function execution
(async function() {
	const db = await getData();
	renderCards(db);
	renderCatalogue();
	actionPage();
	addCart();
	toggleCart();
	toggleCheckbox();
}());
