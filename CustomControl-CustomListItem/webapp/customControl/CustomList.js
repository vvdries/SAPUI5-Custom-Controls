sap.ui.define(
	['sap/m/List'],
	function (List) {
		return List.extend("custom.controls.customControl.CustomList", {
			metadata: {
				properties: {},
				aggregations: {
					items: {
						type: "custom.controls.customControl.CustomStandardListItem",
						multiple: true,
						singularName: "item"
					}
				}
			},
			renderer: function (oRm, oControl) {
				sap.m.ListRenderer.render(oRm,oControl); //use supercass renderer routine
			}
		});
	}
);