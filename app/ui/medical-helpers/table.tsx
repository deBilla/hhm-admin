import { FormattedMedicalHelpersTable } from "@/app/lib/definitions";
import Table from "../table";

export default function MedicalHelpers({
  medicalHelpers,
}: {
  medicalHelpers: FormattedMedicalHelpersTable[];
}) {
  const columns = {
    profile_photo_url: "Profile Photo",
    full_name: "Full Name",
    phone: "Phone",
    email: "Email",
    date_of_birth: "Date of Birth",
    gender: "Gender",
    address: "Address",
    qualification: "Qualification",
    experience_years: "Experience (Years)",
    verification_status: "Verification Status",
  };  

  return (
    <Table
        data={medicalHelpers}
        columns={columns}
        imageColumns={["profile_photo_url"]}
      />
  );
}
