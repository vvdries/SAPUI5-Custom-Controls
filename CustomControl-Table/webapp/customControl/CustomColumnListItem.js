sap.ui.define(
	['sap/m/ColumnListItem'],
	function (ColumnListItem) {
		return ColumnListItem.extend("custom.controls.CustomControl-Table.customControl.CustomColumnListItem", {
			metadata: {
				properties: {
					backgroundColor: {
						type: "sap.ui.core.CSSColor",
						defaultValue: "#000000"
					}
				}
			},
			onAfterRendering: function () {
				if (ColumnListItem.prototype.onAfterRendering) {
					ColumnListItem.prototype.onAfterRendering.apply(this, arguments);
				}
				if (this.getBackgroundColor()) {
					this.$().css("background-color", this.getBackgroundColor());
				}
			},
			renderer:{ }
		});
	}
);