'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { deleteMedicalHelperById, postMedicalHelper, putMedicalHelper } from '../dashboard/medical-helpers/data';
import { MedicalHelper } from './definitions';
 
const FormSchema = z.object({
  uuid: z.string(),
  full_name: z.string(),
  email: z.string(),
  profile_photo_url: z.string(),
  phone: z.string(),
  date_of_birth: z.string(),
  gender: z.enum(['Male', 'Female', 'Other']),
  address: z.string(),
  qualification: z.string(),
  experience_years: z.string(),
  verification_status: z.enum(['Pending', 'Verified', 'Rejected'])
});
 
const CreateMedicalHelper = FormSchema.omit({ uuid: true });

export async function createMedicalHelper(formData: FormData) {
  const newMedicalHelper = CreateMedicalHelper.parse({
    full_name: formData.get('fullName'),
    email: formData.get('email'),
    profile_photo_url: formData.get('profilePhotoUrl'),
    phone: formData.get('phone'),
    date_of_birth: formData.get('dateOfBirth'),
    gender: formData.get('gender'),
    address: formData.get('address'),
    qualification: formData.get('qualification'),
    experience_years: formData.get('experienceYears'),
    verification_status: formData.get('verificationStatus'),
  });

  console.log(newMedicalHelper);
  const response = await postMedicalHelper(newMedicalHelper);

  console.log(response);

  revalidatePath('/dashboard/medical-helpers');
  redirect('/dashboard/medical-helpers');
}

export async function updateMedicalHelper(id: string, formData: FormData) {
  const newMedicalHelper = CreateMedicalHelper.parse({
    full_name: formData.get('fullName'),
    email: formData.get('email'),
    profile_photo_url: formData.get('profilePhotoUrl'),
    phone: formData.get('phone'),
    date_of_birth: formData.get('dateOfBirth'),
    gender: formData.get('gender'),
    address: formData.get('address'),
    qualification: formData.get('qualification'),
    experience_years: formData.get('experienceYears'),
    verification_status: formData.get('verificationStatus'),
  });

  console.log(newMedicalHelper);
  const response = await putMedicalHelper(id, newMedicalHelper);

  console.log(response);

  revalidatePath('/dashboard/medical-helpers');
  redirect('/dashboard/medical-helpers');
}

export async function deleteMedicalHelper(id: string) {
  await deleteMedicalHelperById(id);
  revalidatePath('/dashboard/invoices');
}
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}