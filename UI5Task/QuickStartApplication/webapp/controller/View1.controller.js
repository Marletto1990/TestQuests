sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("QuickStartApplication.controller.View1", {
		onInit: function () {
			//this.Router = UIComponent.getRouterFor(this);
		},
		onTableItemPress: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Detail");
		}
	});

});