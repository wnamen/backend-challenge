function index(req, res){
	res.json({
		message: "GAcon",
		// documentation_url: "https://github.com/wnamen/foodify/api.md",
		// base_url: "http://foodifyme.herokuapp.com",
		endpoints: [
			{method: "GET", path: "/api", description: "Describes available endpoints"},
			{method: "GET", path: "/api/recipes", description: "Renders all recipes"},
			{method: "GET", path: "/api/recipes/:id", description: "Renders a specific recipe"},
			{method: "POST", path: "/api/recipes", description: "Creates new recipe"}			
		]
	});
}

module.exports.index = index;
