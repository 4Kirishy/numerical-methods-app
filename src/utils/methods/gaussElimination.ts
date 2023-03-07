function gaussianElimination(matrix: number[][]) {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    // find pivot row
    let max = 0;
    let row = i;

    for (let j = i; j < n; j++) {
      if (Math.abs(matrix[j][i]) > max) {
        max = Math.abs(matrix[j][i]);
        row = j;
      }
    }

    // swap pivot row with current row
    let temp = matrix[row];
    matrix[row] = matrix[i];
    matrix[i] = temp;

    // perform elimination on rows below pivot
    for (let j = i + 1; j < n; j++) {
      let factor = matrix[j][i] / matrix[i][i];
      for (let k = i; k < n + 1; k++) {
        matrix[j][k] = matrix[j][k] - factor * matrix[i][k];
      }
    }
  }

  // back substitution to get solution

  let solution = new Array<number>(n);
  for (let i = n - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = i + 1; j < n; j++) {
      sum += matrix[i][j] * solution[j];
    }
    solution[i] = Math.round((matrix[i][n] - sum) / matrix[i][i]);
  }

  return solution;
}

export { gaussianElimination };
