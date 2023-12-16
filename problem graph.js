const { log } = require('console');

class Graph {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    this.res = {};
    for (let i = 0; i < v; i++) this.adj[i] = [];
  }
  addEdge(v, w) {
    this.adj[v] && this.adj[v].push(w);
  }

  DFSUtil(v, visited) {
    // if (this.res[v]) return;

    visited[v] = true;

    this.res[v] = true;
    for (let i of this?.adj[v]?.values() || []) {
      let n = i;
      if (!visited[n]) {
        this.DFSUtil(n, visited);
      }
    }
  }

  DFS(v) {
    let visited = new Array(this.V);
    for (let i = 0; i < this.V; i++) visited[i] = false;

    this.DFSUtil(v, visited);
  }
}

function countDelayedFlights(flightNodes, flightFrom, flightTo, delayed) {
  const g = new Graph(flightNodes);
  for (let i = 0; i < flightFrom.length; i++) {
    g.addEdge(flightTo[i], flightFrom[i]);
  }

  for (let i = 0; i < delayed && delayed.length; i++) {
    g.DFS(delayed[i]);
  }

  return Object.keys(g.res).sort((a, b) => a - b);
}

log(countDelayedFlights(4, [4, 3], [1, 2], [1]));
log(countDelayedFlights(4, [2, 3, 1, 1], [1, 2, 3, 4], [1]));
