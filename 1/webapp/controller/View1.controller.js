sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Text",
	'sap/m/ColumnListItem'
], function (Controller, Text, ColumnListItem) {
	"use strict";

	return Controller.extend("Gists.Test1.controller.View1", {
		onInit: function () {
			let oModel = this.getView().getModel('main');
			this.oMainModel = this.getView().getModel('main');
		},
		gistsRowFactory(sId, oContext) {
			let oModel = oContext.getModel(),
				sPath = oContext.getPath(),
				oFiles = oModel.getProperty(sPath + '/files'),
				aCells = [
					new Text({
						text: Object.values(oFiles)[0].filename
					}),
					new Text({
						text: Object.values(oFiles)[0].language
					}),
					new Text({
						text: Object.values(oFiles)[0].raw_url
					})
				];
			var oUIControl = new ColumnListItem(
				{
					cells: aCells,
				})
			return oUIControl;
		}
	});
});
