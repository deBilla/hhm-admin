import MedicalHelpers from "@/app/ui/medical-helpers/table";

export default async function Page() {
  const data = await fetch('http://ec2-3-86-39-26.compute-1.amazonaws.com:3001/v1/helper');
  const medicalHelpers = await data.json()
  return (
    <MedicalHelpers medicalHelpers = {medicalHelpers.payload || []} />
  )
}