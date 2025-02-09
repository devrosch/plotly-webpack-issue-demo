import Plotly from 'plotly.js-dist-min';

function plot() {
  const tester = document.getElementById('plot');
  Plotly.newPlot(tester, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], {
      margin: { t: 0 }
    }
  );
}

plot();
