sap.ui.define(
	['sap/m/StandardListItem'],
	function (StandardListItem) {
		return StandardListItem.extend("custom.controls.customControl.CustomStandardListItem", {
			metadata: {
				properties: {
					backgroundColor: {
						type: "sap.ui.core.CSSColor",
						defaultValue: "#000000"
					}
				}
			},
			onAfterRendering: function () {
				if (StandardListItem.prototype.onAfterRendering) {
					StandardListItem.prototype.onAfterRendering.apply(this, arguments);
				}
				if (this.getBackgroundColor()) {
					this.$().css("background-color", this.getBackgroundColor());
				}
			},
			renderer:{ }
		});
	}
);