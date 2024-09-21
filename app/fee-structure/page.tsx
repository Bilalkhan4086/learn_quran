import React from "react";

const FeeStructure = () => {
  return (
    <div className="max-w-7xl relative m-auto px-4 my-10 max-lg:p-6 py-20 flex flex-col">
      <h2 className="text-center text-3xl font-semibold text-kaizenblue">
        Quran classes Fee, Online Quran lessons, 1 Free trial
      </h2>
      <p className="my-6 max-w-[900px] mx-auto text-center text-white">
        We provide opportunities for students and parents to have conversations
        in free trial class with teachers for guidance and interaction with
        teachers.
      </p>

      <div className="max-w-7xl w-full overflow-scroll">
        <table className="table mx-auto min-w-[1024px] border-[1px] border-red-50 text-center">
          <thead className="bg-blue-500 text-white">
            <tr className="bg-gray-800">
              <th className="border-r-[1px] p-2 border-red-50" scope="col">
                Classes
              </th>
              <th className="border-r-[1px] p-2 border-red-50" scope="col">
                Class Duration
              </th>
              <th className="border-r-[1px] p-2 border-red-50" scope="col">
                USD $
              </th>
              <th className="border-r-[1px] p-2 border-red-50" scope="col">
                UK £
              </th>
              <th scope="col">Euro €</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border-r-[1px] p-2 border-red-50  text-kaizenred" scope="row">
                2 days a week 8 per month
              </th>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizenred">
                30 min lessons
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                $30 per month
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                £15 per month
              </td>
              <td className="text-kaizengreen">€18 per month</td>
            </tr>
            <tr>
              <th className="border-r-[1px] p-2 border-red-50 text-kaizenred" scope="row">
                3 days a week 12 per month
              </th>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizenred">
                30 min lessons
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                $40 per month
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                £23 per month
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                €23 per month
              </td>
            </tr>
            <tr>
              <th className="border-r-[1px] py-2 border-red-50 text-kaizenred" scope="row">
                4 days a week 16 per month
              </th>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizenred">
                30 min lessons
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                $50 per month
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                £30 per month
              </td>
              <td className="text-kaizengreen">€30 per month</td>
            </tr>
            <tr>
              <th className="border-r-[1px] py-2 border-red-50 text-kaizenred" scope="row">
                5 days a week 20 per month
              </th>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizenred">
                30 min lessons
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                $60 per month
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                £38 per month
              </td>
              <td className="text-kaizengreen">€38 per month</td>
            </tr>
            <tr>
              <th className="border-r-[1px] py-2 border-red-50 text-kaizenred" scope="row">
                4 days a week 16 per month
              </th>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizenred">
                30 min lessons
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                $70 per month
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                €45 per month
              </td>
              <td className="text-kaizengreen">€45 per month</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="my-6 text-center text-purplish">
        We have discounts for multiple family members.
      </p>
      <div className="max-w-7xl w-full overflow-scroll text-white">
        <table className="table  mx-auto min-w-[1024px] border-[1px] border-red-50 text-center">
          <thead className="bg-blue-500 text-white">
            <tr className="bg-gray-800">
              <th className="border-r-[1px] py-2 border-red-50" scope="col">
                Days
              </th>
              <th className="border-r-[1px] py-2 border-red-50" scope="col">
                Class Duration
              </th>
              <th className="border-r-[1px] py-2 border-red-50" scope="col">
                USD $
              </th>
              <th className="border-r-[1px] py-2 border-red-50" scope="col">
                UK £
              </th>
              <th scope="col">Euro €</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border-r-[1px] py-2 border-red-50 text-kaizenred" scope="row">
                3 days a week 12 per month
              </th>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizenred">
                90 min lessons
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                $90 per month
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                £70 per month
              </td>
              <td className="text-kaizengreen">€85 per month</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="my-6 text-center text text-purplish">
        For Saudi Arabia,Qatar,Muscat,Oman,United Arab Emirates, Pakistan Fee
        Detail.
      </p>
      <div className="max-w-7xl w-full overflow-scroll">
        <table className="table  mx-auto min-w-[1024px] border-[1px] border-red-50 text-center">
          <thead className="bg-blue-500 text-white">
            <tr className="bg-gray-800">
              <th className="border-r-[1px] p-2 border-red-50" scope="col">
                Days
              </th>
              <th className="border-r-[1px] p-2 border-red-50" scope="col">
                Class Duration
              </th>
              <th className="border-r-[1px] p-2 border-red-50" scope="col">
                Riyal/Dirham
              </th>
              <th className="border-r-[1px] p-2 border-red-50" scope="col">
                Pakistan
              </th>
              <th scope="col">Euro €</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border-r-[1px] p-2 border-red-50 text-kaizenred" scope="row">
                2 days a week 8 per month
              </th>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizenred">
                30 min lessons
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">70 per month</td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                1500 per month
              </td>
              <td className="text-kaizengreen">€15 per month</td>
            </tr>
            <tr>
              <th className="border-r-[1px] p-2 border-red-50 text-kaizenred" scope="row">
                3 days a week 12 per month
              </th>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizenred">
                30 min lessons
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">90 per month</td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                2000 per month
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                €15 per month
              </td>
            </tr>
            <tr>
              <th className="border-r-[1px] p-2 border-red-50 text-kaizenred" scope="row">
                4 days a week 16 per month
              </th>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizenred">
                30 min lessons
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                104 per month
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                2500 per month
              </td>
              <td className="text-kaizengreen">€25 per month</td>
            </tr>
            <tr>
              <th className="border-r-[1px] p-2 border-red-50 text-kaizenred" scope="row">
                5 days a week 20 per month
              </th>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizenred">
                30 min lessons
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                115 per month
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                3000 per month
              </td>
              <td className="text-kaizengreen">€30 per month</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="my-6 text-center w-full text-purplish animate-pulse bg-green-500 py-2">
        We have 10% discounts for family after first student on 3 or more days
        plans.
      </p>
    </div>
  );
};

export default FeeStructure;
