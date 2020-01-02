sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("custom.controls.CustomControl-Table.controller.View1", {
		onInit: function () {
			var oView = this.getView();
			// set explored app's demo model on this sample
			var oModel = new JSONModel();
			oModel.setData({
				ProductCollection: [{
					ProductId: 1000,
					Name: "Phones",
					color: "#74992e"
				}, {
					ProductId: 2000,
					Name: "Tablets",
					color: "#ff9d3f"
				}, {
					ProductId: 3000,
					Name: "Laptops",
					color: "#58a5f0"
				}, {
					ProductId: 4000,
					Name: "Desktops",
					color: "#9e00c5"
				}, {
					ProductId: 5000,
					Name: "Printers",
					color: "#ffff00"
				}, {
					ProductId: 6000,
					Name: "Switches",
					color: "#524c00"
				}, {
					ProductId: 7000,
					Name: "Routers",
					color: "#00e5ff"
				}, {
					ProductId: 8000,
					Name: "Cameras",
					color: "#c50e29"
				}, {
					ProductId: 9000,
					Name: "NO COLOR",
					color: null
				}]
			});
			oView.setModel(oModel);
		}
	});
});