sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("QuickStartApplication.controller.View1", {
		onInit: function () {

		},
		onTableItemPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var sPath = oEvent.getSource().getBindingContextPath();
			oRouter.navTo("detail", {
				path: sPath
			});

		}
	});
});