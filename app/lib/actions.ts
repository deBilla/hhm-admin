'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { deleteMedicalHelperById, postMedicalHelper, putMedicalHelper } from '../dashboard/medical-helpers/data';
 
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
  experience_years: z.coerce.number({invalid_type_error: 'Please Enter a Valid Number !!!'}).gt(0, {message: 'Please enter a number greater than 1'}),
  verification_status: z.enum(['Pending', 'Verified', 'Rejected'])
});
 
const CreateMedicalHelper = FormSchema.omit({ uuid: true });

export async function createMedicalHelper(prevState: State, formData: FormData) {
  const validatedFields = CreateMedicalHelper.safeParse({
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

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  await postMedicalHelper(validatedFields.data);
  revalidatePath('/dashboard/medical-helpers');
  redirect('/dashboard/medical-helpers');
}

export async function updateMedicalHelper(prevState: State, id: string, formData: FormData) {
  const validatedFields = CreateMedicalHelper.safeParse({
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

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  await putMedicalHelper(id, validatedFields.data);
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

export type State = {
  errors?: {
    full_name?: string[],
    email?: string[],
    profile_photo_url?: string[],
    phone?: string[],
    date_of_birth?: string[],
    gender?: string[],
    address?: string[],
    qualification?: string[],
    experience_years?: string[],
    verification_status?: string[],
  };
  message?: string | null;
};