"use client"
import  { SetState ,create} from 'zustand';

type FormState = {
  submittedData: Array<{ name: string; email: string; age: string }>;
  setSubmittedData: (data: Array<{ name: string; email: string; age: string }>) => void;
};

export const useFormStore = create<FormState>((set: SetState<FormState>) => ({
  submittedData: [],
  setSubmittedData: (data) => set(() => ({ submittedData: data })),
}));







