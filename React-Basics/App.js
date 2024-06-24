const heading = React.createElement("h1", { id: "heading", name: "Neeraj" }, "Hello World from react using External JavaScript");
console.log(heading);

//Nested Structure HTML using JS

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I'm child1 H1 Tag"), React.createElement("h2", {}, "I'm child1 H2 Tag")]
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I'm child2 H1 Tag"), React.createElement("h2", {}, "I'm child2 H2 Tag")]
    )]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

