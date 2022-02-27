var nodes = null;
var edges = null;
var network = null;

function draw() {
  // create people.
  // value corresponds with the age of the person
  nodes = [
    { id: 1, value: 1, label: "Neil Medina" },
    { id: 2, value: 6, label: "Back-end" },
    { id: 3, value: 12, label: "Front-end" },
    { id: 4, value: 16, label: "Dev-ops" },
    { id: 5, value: 17, label: "Others" },
    { id: 6, value: 15, label: "HTML" },
    { id: 7, value: 6, label: "Javascript" },
    { id: 8, value: 5, label: "CSS" },
    { id: 9, value: 30, label: "Sass" },
    { id: 10, value: 18, label: "Bootstrap" },
    { id: 11, value: 18, label: "React js" },
    { id: 12, value: 18, label: "Vue js" },
    { id: 13, value: 18, label: "Vis js" },
    { id: 14, value: 18, label: "Node js" },
    { id: 15, value: 18, label: "Go" },
    { id: 16, value: 18, label: "Uadmin" },
    { id: 17, value: 18, label: "Docker" },
    { id: 18, value: 18, label: "Vultr" },
    { id: 19, value: 18, label: "Nginx" },
    { id: 20, value: 18, label: "SEO" },
    { id: 21, value: 18, label: "OS" },
    { id: 22, value: 18, label: "Linux" },
    { id: 23, value: 18, label: "Windows" },
    { id: 24, value: 18, label: "C#" },
    { id: 25, value: 18, label: "Github" },
    { id: 26, value: 18, label: "Electronics" },
    { id: 27, value: 18, label: "Arduino" },
    { id: 28, value: 18, label: "Rasberry Pi" },
    { id: 29, value: 18, label: "Machine Learning" },
    { id: 30, value: 18, label: "Tensorflow" },
    { id: 31, value: 18, label: "Documentation" },
    { id: 32, value: 18, label: "Markdown" },
    { id: 33, value: 18, label: "Database" },
    { id: 34, value: 18, label: "Mysql" },
    { id: 35, value: 18, label: "Sqlite" },
    { id: 36, value: 18, label: "Framework" },

  ];

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
    { from: 1, to: 2, value: 10 },
    { from: 1, to: 3, value: 10 },
    { from: 1, to: 4, value: 5 },
    { from: 1, to: 5, value: 5 },
    { from: 3, to: 6, value: 3 },
    { from: 3, to: 7, value: 3 },
    { from: 3, to: 8, value: 3 },
    { from: 8, to: 9, value: 1 },
    { from: 3, to: 36, value: 3 },
    { from: 36, to: 10, value: 3 },
    { from: 36, to: 11, value: 3 },
    { from: 36, to: 12, value: 3 },
    { from: 36, to: 13, value: 3 },
    { from: 2, to: 14, value: 3 },
    { from: 2, to: 15, value: 3 },
    { from: 2, to: 24, value: 1 },
    { from: 15, to: 16, value: 8 },
    { from: 4, to: 17, value: 3 },
    { from: 4, to: 18, value: 3 },
    { from: 4, to: 19, value: 3 },
    { from: 5, to: 20, value: 1 },
    { from: 5, to: 21, value: 3 },
    { from: 5, to: 25, value: 3 },
    { from: 5, to: 26, value: 1 },
    { from: 21, to: 22, value: 3 },
    { from: 21, to: 23, value: 3 },
    { from: 26, to: 27, value: 1 },
    { from: 26, to: 28, value: 1 },
    { from: 5, to: 29, value: 1 },
    { from: 5, to: 31, value: 3 },
    { from: 29, to: 30, value: 1 },
    { from: 31, to: 32, value: 3 },
    { from: 2, to: 33, value: 3 },
    { from: 33, to: 34, value: 3 },
    { from: 33, to: 35, value: 1 },

  ];

  // Instantiate our network object.
  var container = document.getElementById("mynetwork");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
  nodes:{
    color: '#A2B295',
    fixed: false,
    font: '36px arial black',
    scaling: {
      label: true
    },
    shadow: true
  }
}
  network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
  draw();
});
