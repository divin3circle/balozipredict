import React from "react";
import Link from "next/link";

export default function Option1() {
  return (
    <div className="my-8">
      <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Method</dt>
            <dd className="text-gray-700 sm:col-span-2">Paypal</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Name</dt>
            <dd className="text-gray-700 sm:col-span-2 font-bold">
              Balozi Tech
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Paypal Email</dt>
            <dd className="text-gray-700 sm:col-span-2">
              balozipredict@gmail.com
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Max Amount</dt>
            <dd className="text-gray-700 sm:col-span-2">$1,000+</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">How to Pay</dt>
            <dd className="text-gray-700 sm:col-span-2">
              Navigate to and{" "}
              <span className="text-blue-500 font-semibold">
                <Link href="paypal.com">Paypal</Link>
              </span>{" "}
              log in with your paypal account and then send the appropriate
              ammount for your plan to this email{" "}
              <span className="text-blue-500 font-semibold">
                baloziprediction@gmail.com
              </span>
              . After sending your payment send the confirmation message to this
              number: 0796314164, and you will receive odds for your plan in the
              form of your chosing.
              <p className="">
                Send confirmation message to this number:{" "}
                <a
                  className="bg-green-500 rounded p-1 text-white"
                  href="https://wa.me/0796314164?text=Hi%20I%20have%20payments%20Sending%20comfirmation%20screenshots"
                >
                  0796314164
                </a>{" "}
                to receive odds for your plan
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
