sap.ui.define(
	['sap/m/Table'],
	function (Table) {
		return Table.extend("custom.controls.CustomControl-Table.customControl.CustomTable", {
			metadata: {
				properties: {},
				aggregations: {
					columns: {
						type: "custom.controls.CustomControl-Table.customControl.CustomColumn",
						multiple: true,
						singularName: "column"
					},
					items: {
						type: "custom.controls.CustomControl-Table.customControl.CustomColumnListItem",
						multiple: true,
						singularName: "item"
					}
				}
			},
			renderer: function (oRm, oControl) {
				sap.m.TableRenderer.render(oRm, oControl); //use supercass renderer routine
			}
		});
	}
);