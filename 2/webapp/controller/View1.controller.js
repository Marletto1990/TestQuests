sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Text",
	'sap/m/ColumnListItem'
], function (Controller, Text, ColumnListItem) {
	"use strict";

	return Controller.extend("Gists.Test2.controller.View1", {
		onInit: function () {
			this.oMainModel = this.getView().getModel('main');
		},
		onV1Press: function(oEvent){
			this.getRouter().navTo("_adminCreateNew");
		}
	});
});
