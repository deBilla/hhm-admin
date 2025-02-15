import MedicalHelpers from "@/app/ui/medical-helpers/table";
import Search from "@/app/ui/search";
import { lusitana } from '@/app/ui/fonts';
import { getMedicalHelpers } from "./data";
import { CreateMedicalHelperButton } from "@/app/ui/medical-helpers/buttons";

export default async function Page(
//   props: {
//   searchParams?: Promise<{
//     query?: string;
//     page?: string;
//   }>;
// }
) {
  // const searchParams = await props.searchParams;
  // const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;
  const medicalHelpers = await getMedicalHelpers() || [];
  
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Medical Helpers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Medical Helpers..." />
        <CreateMedicalHelperButton />
      </div>
      <div className="mt-6 flow-root">
      <MedicalHelpers medicalHelpers = {medicalHelpers} />
      </div>
      {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  )
}