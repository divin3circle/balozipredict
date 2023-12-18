import React from "react";

type TableProps = {
  league: string;
  time: string;
  match: string;
  bet: string;
};

export default function Table({ league, time, match, bet }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white text-sm">
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td
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
              <a
                href="https://bit.ly/3XxVHgv"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                View
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
