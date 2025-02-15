import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { MedicalHelper } from '@/app/lib/definitions';
import { updateMedicalHelper } from '@/app/lib/actions';

export default function Form({medicalHelper}: {medicalHelper: MedicalHelper}) {
  const updateMedicalHelperWithId = updateMedicalHelper.bind(null, medicalHelper.uuid);

  return (
    <form action={updateMedicalHelperWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium">
            Full Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="fullName"
                name="fullName"
                defaultValue={medicalHelper.full_name}
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                defaultValue={medicalHelper.email}
                name="email"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="profilePhotoUrl" className="mb-2 block text-sm font-medium">
            Profile Picture URL
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="profilePhotoUrl"
                defaultValue={medicalHelper.profile_photo_url}
                name="profilePhotoUrl"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="phone"
                defaultValue={medicalHelper.phone}
                name="phone"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="mb-2 block text-sm font-medium">
            Date of Birth
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="dateOfBirth"
                defaultValue={medicalHelper.date_of_birth}
                name="dateOfBirth"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="mb-2 block text-sm font-medium">
            Gender
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="gender"
                defaultValue={medicalHelper.gender}
                name="gender"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="mb-2 block text-sm font-medium">
            Address
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="address"
                defaultValue={medicalHelper.address}
                name="address"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="qualification" className="mb-2 block text-sm font-medium">
            Qualification
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="qualification"
                defaultValue={medicalHelper.qualification}
                name="qualification"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="experienceYears" className="mb-2 block text-sm font-medium">
            Expierience Years
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="experienceYears"
                defaultValue={medicalHelper.experience_years}
                name="experienceYears"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="verificationStatus" className="mb-2 block text-sm font-medium">
            Verification Status
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="verificationStatus"
                defaultValue={medicalHelper.verification_status}
                name="verificationStatus"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/medical-helpers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Update Medical Helper</Button>
      </div>
    </form>
  );
}
