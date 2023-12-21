import React from "react";

type TableProps = {
  matchResult: string;
  result: string;
  match: string;
  bet: string;
};

export default function YTable({
  matchResult,
  result,
  match,
  bet,
}: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white text-sm">
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td
              className="whitespace-nowrap px-4 py-2 text-gray-700 truncate"
              style={{ width: "100px" }}
            >
              {matchResult}
            </td>
            <td
              className={`whitespace-nowrap px-4 py-2 font-bold ${
                result.toLocaleLowerCase() === "won"
                  ? "text-blue-600"
                  : "text-red-600"
              } truncate`}
              style={{ width: "100px" }}
            >
              {result}
            </td>
            <td
              className="whitespace-nowrap px-4 py-2 text-gray-700 truncate"
              style={{ width: "400px" }}
            >
              {match}
            </td>
            <td
              className="whitespace-nowrap px-4 py-2 text-gray-700 truncate"
              style={{ width: "200px" }}
            >
              {bet}
            </td>
            <td className="whitespace-nowrap px-4 py-2 flex justify-end">
              {result.toLocaleLowerCase() === "won" ? "✅" : "❌"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
