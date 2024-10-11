// generate random color from material ui
export function randomColor(n?: number) {
  const COLOR = [
    "#9c27b0",
    "#e91e63",
    "#f44336",
    "#ff5722",
    "#009688",
    "#4caf50",
    "#3f51b5",
    "#2196f3",
    "#607d8b",
    "#ff9800",
    "#ffc107",
    "#795548",
  ];
  //
  let [x, y] = [Math.random(), COLOR.length - 0 + 1];
  let i = n ? n - 1 : Math.floor(x * y) + 0;
  return COLOR[i];
}
