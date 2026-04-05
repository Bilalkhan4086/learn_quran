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
              <th scope="col">PKR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border-r-[1px] p-2 border-red-50  text-kaizenred" scope="row">
                1 days a week 8 per month
              </th>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizenred">
                20 min lessons
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                $11 per month
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                £10 per month
              </td>
              <td className="text-kaizengreen">3000 per month</td>
            </tr>
            <tr>
              <th className="border-r-[1px] p-2 border-red-50  text-kaizenred" scope="row">
                2 days a week 8 per month
              </th>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizenred">
                20 min lessons
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                $22 per month
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                £19 per month
              </td>
              <td className="text-kaizengreen">6000 per month</td>
            </tr>
            <tr>
              <th className="border-r-[1px] p-2 border-red-50 text-kaizenred" scope="row">
                3 days a week 12 per month
              </th>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizenred">
                20 min lessons
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                $33 per month
              </td>
              <td className="border-r-[1px] p-2 border-red-50 text-kaizengreen">
                £29 per month
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                9000 per month
              </td>
            </tr>
            <tr>
              <th className="border-r-[1px] py-2 border-red-50 text-kaizenred" scope="row">
                4 days a week 16 per month
              </th>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizenred">
                20 min lessons
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                $44 per month
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                £38 per month
              </td>
              <td className="text-kaizengreen">12000 per month</td>
            </tr>
            <tr>
              <th className="border-r-[1px] py-2 border-red-50 text-kaizenred" scope="row">
                5 days a week 20 per month
              </th>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizenred">
                20 min lessons
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                $55 per month
              </td>
              <td className="border-r-[1px] py-2 border-red-50 text-kaizengreen">
                £50 per month
              </td>
              <td className="text-kaizengreen">15000 per month</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeStructure;
