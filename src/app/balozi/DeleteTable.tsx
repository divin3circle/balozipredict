import React from "react";

type TableProps = {
  league: string;
  time: string;
  match: string;
  bet: string;
};

export default function DeleteTable({ league, time, match, bet }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white text-sm">
        <tbody className="divide-y divide-gray-200">
          <tr>
            {/* <td
              className="whitespace-nowrap px-4 py-2 text-gray-700 truncate"
              style={{ width: "100px" }}
            >
              {league}
            </td>
            <td
              className="whitespace-nowrap px-4 py-2 text-gray-700 truncate"
              style={{ width: "100px" }}
            >
              {time}
            </td> */}
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
          </tr>
        </tbody>
      </table>
    </div>
  );
}
