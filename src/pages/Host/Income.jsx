import React from "react"
import imageUrl from "/src/assets/income-graph.png"

export default function Income() {
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return (
        <div className="h-screen w-100 font-poppins">
        <section className="p-6 text-gray-300 flex flex-col md:flex-row  gap-x-2 host-income">

        <div className="bg-gray-900 rounded-lg p-4 host-income-graph">
          <h1 className="text-2xl font-semibold">Your Income</h1>
          <p>
            Last <span className="font-bold">30 days</span>
          </p>
          <h2 className="text-3xl font-bold">$2,260</h2>
          <img
            className="w-full max-w-xs md:max-w-md mx-auto"
            src={imageUrl}
            alt="Income graph"
          />
        </div>
      
        <div className="bg-gray-900 rounded-lg p-4 host-income-transactions">
          <h3 className="text-xl font-semibold">Your transactions (3)</h3>
          <p>
            Last <span className="font-bold mb-4">30 days</span>
          </p>
          <div className="flex flex-col gap-8 mt-8">
            {transactionsData.map((item) => (
              <div key={item.id} className="bg-gray-700 rounded-lg p-4 transaction">
                <h3 className="text-xl font-semibold">${item.amount}</h3>
                <p className="text-gray-500">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      
      </section>
      </div>
    )
}
