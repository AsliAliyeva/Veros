import React from 'react'
import './../../index.css'

function Table () {
  return (
    <div className="scroll-hidden w-full tablet:w-[70%] mx-auto m-8">
      <table className="min-w-full table-auto text-[10px] tablet:text-[16px]">
        <thead>
          <tr className="bg-[#748371] text-white">
            <th className="px-4 py-2 text-center">Tallas</th>
            <th className="px-4 py-2 text-center">Busto</th>
            <th className="px-4 py-2 text-center">Cintura</th>
            <th className="px-4 py-2 text-center">Cadera</th>
            <th className="px-4 py-2 text-center">Brassiere</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#f2f2f2] text-[#748371]">
            <td className="px-4 py-2 text-center">XS</td>
            <td className="px-4 py-2 text-center">85-90</td>
            <td className="px-4 py-2 text-center">55-60</td>
            <td className="px-4 py-2 text-center">85-90</td>
            <td className="px-4 py-2 text-center">32A-34B</td>
          </tr>
          <tr className="bg-white hover:bg-[#f2f2f2] text-[#748371]">
            <td className="px-4 py-2 text-center">S</td>
            <td className="px-4 py-2 text-center">91-95</td>
            <td className="px-4 py-2 text-center">61-70</td>
            <td className="px-4 py-2 text-center">91-95</td>
            <td className="px-4 py-2 text-center">34B-36B</td>
          </tr>
          <tr className="bg-[#f2f2f2] text-[#748371]">
            <td className="px-4 py-2 text-center">M</td>
            <td className="px-4 py-2 text-center">96-100</td>
            <td className="px-4 py-2 text-center">65-75</td>
            <td className="px-4 py-2 text-center">96-100</td>
            <td className="px-4 py-2 text-center">36B-34C-36C</td>
          </tr>
          <tr className="bg-white hover:bg-[#f2f2f2] text-[#748371]">
            <td className="px-4 py-2 text-center">L</td>
            <td className="px-4 py-2 text-center">101-105</td>
            <td className="px-4 py-2 text-center">70-80</td>
            <td className="px-4 py-2 text-center">101-105</td>
            <td className="px-4 py-2 text-center">38B-36C-38C</td>
          </tr>
          <tr className="bg-[#f2f2f2] text-[#748371]">
            <td className="px-4 py-2 text-center">XL</td>
            <td className="px-4 py-2 text-center">106-115</td>
            <td className="px-4 py-2 text-center">75-90</td>
            <td className="px-4 py-2 text-center">106-115</td>
            <td className="px-4 py-2 text-center">40B-38C-40C</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table