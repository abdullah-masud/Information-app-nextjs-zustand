"use client"
import Image from 'next/image'
import Form from '../Components/Form/Form'
import { useFormStore } from '../../store/store';
import DataTable from '@/Components/DataTable/DataTable';

export default function Home() {
  const { submittedData, setSubmittedData } = useFormStore();

  const handleSubmit = (formData: { name: string; email: string; age: string }) => {
    setSubmittedData([...submittedData, formData]);
  };
  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      <DataTable />
    </div>
  )
}
