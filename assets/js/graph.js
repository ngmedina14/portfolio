var nodes = null;
var edges = null;
var network = null;

function draw() {
  // create people.
  // value corresponds with the age of the person
  nodes = [
    { id: 1, group:'main', value: 1, label: "<b>Neil Medina</b>\n <code>( Web Developer )</code> " },
    { id: 2, group:'sub', value: 6, label: "Back-end" },
    { id: 3, group:'sub', value: 12, label: "Front-end" },
    { id: 4, group:'sub', value: 16, label: "Dev-ops" },
    { id: 5, group:'title', value: 17, label: "Others" },
    { id: 6, group:'language', value: 15, label: "HTML" },
    { id: 7, group:'language', value: 6, label: "Javascript" },
    { id: 8, group:'language', value: 5, label: "CSS" },
    { id: 9, value: 30, label: "Sass" },
    { id: 10, value: 18, label: "Bootstrap" },
    { id: 11, value: 18, label: "React js" },
    { id: 12, value: 18, label: "Vue js" },
    { id: 13, value: 18, label: "Vis js" },
    { id: 14, value: 18, label: "Node js" },
    { id: 15, group:'language', value: 18, label: "Go" },
    { id: 16, value: 18, label: "Uadmin" },
    { id: 17, value: 18, label: "Docker" },
    { id: 18, value: 18, label: "Vultr" },
    { id: 19, value: 18, label: "Nginx" },
    { id: 20, value: 18, label: "SEO" },
    { id: 21, group:'title', value: 18, label: "OS" },
    { id: 22, value: 18, label: "Linux" },
    { id: 23, value: 18, label: "Windows" },
    { id: 24, group:'language', value: 18, label: "C#" },
    { id: 25, value: 18, label: "Github" },
    { id: 26, group:'title', value: 18, label: "Electronics" },
    { id: 27, value: 18, label: "Arduino" },
    { id: 28, value: 18, label: "Rasberry Pi" },
    { id: 29, group:'title', value: 18, label: "Machine\nLearning" },
    { id: 30, value: 18, label: "Tensorflow" },
    { id: 31, group:'title', value: 18, label: "Documentation" },
    { id: 32, value: 18, label: "Markdown" },
    { id: 33, group:'title', value: 18, label: "Database" },
    { id: 34, value: 18, label: "Mysql" },
    { id: 35, value: 18, label: "Sqlite" },
    { id: 36, group:'title', value: 18, label: "Framework" },

  ];

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
    { from: 1, to: 2, value: 8 },
    { from: 1, to: 3, value: 8 },
    { from: 1, to: 4, value: 5 },
    { from: 1, to: 5, value: 5 },
    { from: 3, to: 6, value: 8 },
    { from: 3, to: 7, value: 8 },
    { from: 3, to: 8, value: 8 },
    { from: 8, to: 9, value: 1 },
    { from: 3, to: 36, value: 3 },
    { from: 36, to: 10, value: 8 },
    { from: 36, to: 11, value: 3 },
    { from: 36, to: 12, value: 3 },
    { from: 36, to: 13, value: 5 },
    { from: 2, to: 14, value: 3 },
    { from: 2, to: 15, value: 5 },
    { from: 2, to: 24, value: 3 },
    { from: 15, to: 16, value: 8 },
    { from: 4, to: 17, value: 8 },
    { from: 4, to: 18, value: 8 },
    { from: 4, to: 19, value: 5 },
    { from: 5, to: 20, value: 1 },
    { from: 5, to: 21, value: 3 },
    { from: 5, to: 25, value: 8 },
    { from: 5, to: 26, value: 1 },
    { from: 21, to: 22, value: 8 },
    { from: 21, to: 23, value: 5 },
    { from: 26, to: 27, value: 1 },
    { from: 26, to: 28, value: 1 },
    { from: 5, to: 29, value: 1 },
    { from: 5, to: 31, value: 3 },
    { from: 29, to: 30, value: 1 },
    { from: 31, to: 32, value: 8 },
    { from: 2, to: 33, value: 8 },
    { from: 33, to: 34, value: 8 },
    { from: 33, to: 35, value: 8 },

  ];

  // Instantiate our network object.
  var container = document.getElementById("mynetwork");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
  interaction:{
    hover:true,
    hoverConnectedEdges: false,
    zoomView: false,
    dragView: false,
    navigationButtons: true,
  },
  groups: {
    main: {
      shape: 'circle', 
      color:{
        border: 'aqua',
        background: 'aqua',
      }, 
      borderWidth:3,
      font: {
        // required: enables displaying <b>text</b> in the label as bold text
        multi: 'html',
        // optional: use this if you want to specify the font of bold text
        bold: '55px courier black',
        mono: '45px arial #505050'
    }
    },
    sub: {
      shape: 'circle',  
      color:{
        border: '#7EC8E3',
        background: '#7EC8E3',
      }, 
      borderWidth:3,
      font: {
        // required: enables displaying <b>text</b> in the label as bold text
        multi: 'html',
        // optional: use this if you want to specify the font of bold text
        bold: '70px times black'
    }
    },
    title: {
      shape: 'ellipse',  
      color:{
        border: '#b1dcec',
        background: '#b1dcec',
      }, 
      borderWidth:3,
    },
    language: {
      shape: 'box',  
      color:{
        border: '#d2edf7',
        background: '#d2edf7',
      }, 
      borderWidth:3,
    }
  },
  nodes:{
    borderWidthSelected: 0,
    shape: 'box',
    chosen: {
      enabled:false,
      label:function (values, id, selected, hovering) {
        values.mod = 'bold';
    }
    },
    color: {
      border: '#fdfdfd',
      background: '#e3e3e1',
      highlight: {
        border: 'aqua',
        background: 'aqua',
      },
      hover: {
        border: 'aqua',
        background: 'aqua',
      }
    },
    
    fixed: false,
    mass: 2,
    labelHighlightBold: true,
    font: '50px arial #505050',
    shadow: true
  },
  layout: {
    randomSeed:1,
    clusterThreshold: 500,
   },
  edges: {
    smooth: {
        enabled: true,
        type: 'continuous',
    },
    arrows: {
      from: {
        enabled: true,
        scaleFactor: 1,
        type: "arrow"
      }
    },
    arrowStrikethrough: false,
    chosen: true,
    color: {
      highlight:'aqua',
      opacity:1.0
    },

},
physics: {
  // Even though it's disabled the options still apply to network.stabilize().
  enabled: true,
  solver: "forceAtlas2Based",
  forceAtlas2Based: {
    theta: 0.5,
    centralGravity: 0.003,
    springConstant: 1,
    springLength: 205,
    damping: 1,
    avoidOverlap: 1
  },
  maxVelocity: 100,
    minVelocity: 0.001,
},
}
  network = new vis.Network(container, data, options);
  network.stabilize();
  
}
window.addEventListener("load", () => {
  draw();
});

