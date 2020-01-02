/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"custom/controls/CustomControl-Table/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});