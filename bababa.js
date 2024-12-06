elements.Cacao_Beans = {
	color: "#48291C",
	behavior: behaviors.POWDER,
	breakInto: "Crushed_Cacao_Beans"
};

elements.Crushed_Cacao_Beans = {
	color: ["#48291C","#543324","#3d251a"],
	behavior: behaviors.POWDER,
	reactions: {
		"sugar": {elem1: "Chocolate_Mixture"}
};
