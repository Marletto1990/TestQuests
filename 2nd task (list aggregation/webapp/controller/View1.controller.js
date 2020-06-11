sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Text",
	'sap/m/ColumnListItem'
], function (Controller, Text, ColumnListItem) {
	"use strict";

	return Controller.extend("Gists.Test2.controller.View1", {
		onInit: function () {
		},
		onPress: function (oEvent) {
			let oList = oEvent.getSource().getParent();
			let sPath = oEvent.getSource().getBindingContextPath();
			let oMainModel = oEvent.getSource().getModel('main');
			let aNext = oMainModel.getProperty(sPath + '/next');
			let nClick = oMainModel.getProperty(sPath + '/click');
			oMainModel.setProperty(sPath + '/click', nClick + 1);
			if (aNext && aNext.length > 0) {
				let oTemplate = this._getItemTemplate();
				let sNewPath = sPath.split('/');
				sNewPath.pop();
				oList.bindAggregation('items', 'main>' + sPath + '/next/', oTemplate);
				if (!this.previos) {
					this.previos = [];
				}
				this.previos.unshift('main>' + sNewPath.join('/') + '/');
			}
		},
		_getItemTemplate() {
			if (!this.oItemTemplate) {
				this.oItemTemplate = sap.ui.xmlfragment("Gists.Test2.view.fragments.itemTemplate", this)
			}
			return this.oItemTemplate
		},
		navBack() {
			let oList = this.byId('myList');
			let sPath = oList.getBindingInfo('items').path;
			let oMainModel = this.getView().getModel('main');
			if (this.previos && this.previos.length > 0) {
				let oTemplate = this._getItemTemplate();
				oList.bindAggregation('items', this.previos[0], oTemplate);
				this.previos.shift();
			}
		}
	});
});
