"use strict";
const cl = console.log;
// window.onload = function () {
// 	let myPromise = new Promise((res, rej) => {
// 		let myRequest = new XMLHttpRequest();
// 		myRequest.open("GET", "./script/cars.json");
// 		myRequest.send();
// 		myRequest.onload = function () {
// 			if (this.readyState === 4 && this.status === 200) {
// 				let data = JSON.parse(this.responseText);
// 				return res(data);
// 			} else {
// 				return rej(Error("The Operation Is Failed."));
// 			}
// 		};
// 	})
// 		.then((data) => {
// 			cl(data);
// 			let carsParent = document.getElementById("cars");
// 			let carsContainer = document.createElement("div");
// 			carsContainer.classList = "container";
// 			let title = document.createElement("h1");
// 			title.textContent = "Cars";
// 			let carsBoxes = document.createElement("div");
// 			carsBoxes.classList = "boxes";
// 			data.forEach((ele) => {
// 				let eleTitle = ele.title;
// 				let eleDescription = ele.description;
// 				let imgSrc = ele.imgSrc;
// 				let box = document.createElement("div");
// 				box.classList = "box";
// 				let imageContainer = document.createElement("div");
// 				imageContainer.classList = "image";
// 				let img = document.createElement("img");
// 				img.setAttribute("src", imgSrc);
// 				img.setAttribute("alt", `[${eleTitle}]`);
// 				let infoContainer = document.createElement("div");
// 				infoContainer.classList = "info";
// 				let carName = document.createElement("h3");
// 				carName.textContent = eleTitle;
// 				let carDescription = document.createElement("p");
// 				carDescription.classList = "description";
// 				carDescription.textContent = eleDescription;
// 				imageContainer.appendChild(img);
// 				infoContainer.append(carName, carDescription);
// 				box.append(imageContainer, infoContainer);
// 				carsBoxes.append(box);
// 				carsContainer.append(carsBoxes);
// 				carsParent.append(carsContainer);
// 			});
// 		})
// 		.catch((err) => cl(err));
// };

// SAME WITH jQuery

$(document).ready(async function () {
	let carsParent = $("#cars");
	let carsContainer = document.createElement("div");
	$(carsContainer).addClass("container");
	let boxes = document.createElement("div");
	$(boxes).addClass("boxes");
	let mainData = await fetch("./script/cars.json");
	try {
		let dataArr = await mainData.json();
		dataArr.forEach((ele) => {
			boxes.innerHTML += `
				<div class="box">
				  <div class="image">
							<img src="${ele.imgSrc}"/>
							<div class="info" >
								<h3>${ele.title}</h3>
								<p>${ele.description}</p>
							</div>
					</div>
				</div>
			`;
		});
		carsContainer.appendChild(boxes)
		carsParent.append(carsContainer)
	} catch (reason) {
		cl(false);
	}
});
