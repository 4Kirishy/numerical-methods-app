import { ReactElement, useState } from "react";
import { gaussianElimination } from "../../utils/methods/gaussianElimination";

type MatrixProps = {
  rows: number;
  cols: number;
};

export const Matrix = ({ rows, cols }: MatrixProps) => {
  const [answer, setAnswer] = useState<number[]>([]);
  const [matrix, setMatrix] = useState<number[][]>(
    Array.from({ length: rows }, () => Array(cols).fill(""))
  );

  const updateMatrix = (row: number, col: number, value: string) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = parseFloat(value);

    setMatrix(newMatrix);
  };

  const solveMatrix = () => {
    setAnswer(gaussianElimination(matrix));
    setMatrix(Array.from({ length: rows }, () => Array(cols).fill("")));
  };

  const cell = (row: number, col: number): ReactElement => {
    return (
      <input
        className="w-[120px] h-16 p-2 border-4 border-text-main text-2xl bg-bg"
        type="number"
        value={matrix[row][col]}
        onChange={(e) => updateMatrix(row, col, e.target.value)}
      />
    );
  };

  return (
    <div className="flex gap-16">
      <div className="max-w-fit">
        <table className="border-spacing-10">
          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <td key={colIndex} className="pr-10 pb-10 last-of-type:pr-0">
                    {cell(rowIndex, colIndex)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="bg-text-main h-16 text-white w-full uppercase text-2xl tracking-wider shadow-custom hover:bg-opacity-[98%]"
          onClick={solveMatrix}
        >
          solve
        </button>
      </div>
      {answer.length ? (
        <div className="text-2xl uppercase text-text-main">
          <h4 className="font-semibold mb-4">solution:</h4>
          <ul>
            {answer.map((a, index) => (
              <li className="mb-4">
                x{index + 1} = {a}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
