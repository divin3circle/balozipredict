import React from "react";

export default function Odds() {
  return (
    <div>
      <div className=" flex justify-center items-center my-6">
        <p className=" md:text-3xl text-2xl  font-bold text-shark text-center p-4">
          Check out our free Bet collections for today
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                John Doe
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                24/05/1995
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Web Developer
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                $120,000
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </a>
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Jane Doe
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                04/11/1980
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Web Designer
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                $100,000
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </a>
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Gary Barlow
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                24/05/1995
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Singer
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                $20,000
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        d
      </div>
    </div>
  );
}
