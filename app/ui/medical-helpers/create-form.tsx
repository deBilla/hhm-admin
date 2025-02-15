"use client";

import Link from "next/link";
import { Button } from "@/app/ui/button";
import { createMedicalHelper, State } from "@/app/lib/actions";
import { useActionState } from "react";

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createMedicalHelper, initialState);

  return (
    <form action={formAction}>
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
                type="string"
                aria-describedby="full-name-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            <div id="customer-error" aria-live="polite" aria-atomic="true">
              {state.errors?.full_name &&
                state.errors.full_name.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
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
                name="email"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="profilePhotoUrl"
            className="mb-2 block text-sm font-medium"
          >
            Profile Picture URL
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="profilePhotoUrl"
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
                name="phone"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="dateOfBirth"
            className="mb-2 block text-sm font-medium"
          >
            Date of Birth
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="dateOfBirth"
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
                name="address"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="qualification"
            className="mb-2 block text-sm font-medium"
          >
            Qualification
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="qualification"
                name="qualification"
                type="string"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="experienceYears"
            className="mb-2 block text-sm font-medium"
          >
            Expierience Years
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="experienceYears"
                name="experienceYears"
                type="number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="verificationStatus"
            className="mb-2 block text-sm font-medium"
          >
            Verification Status
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="verificationStatus"
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
        <Button type="submit">Create Medical Helper</Button>
      </div>
    </form>
  );
}
