sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"Gists/Test1/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("Gists.Test1.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			this.getModel('main').loadData("https://api.github.com/gists/public");

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
