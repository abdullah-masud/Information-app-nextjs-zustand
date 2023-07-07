"use client"
import { useFormStore } from '../../../store/store';

const DataTable = () => {
  const submittedData = useFormStore((state) => state.submittedData);

  return (
    <div className=" flex justify-center items-center flex-col pt-12 h-full  ">
      <h2 className='text-2xl font-semibold mb-4'>Information Table</h2>
      <table className="table w-1/2 ">
      <thead>
        <tr >
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {submittedData.map((data, index) => (
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DataTable;
