import CustomersTable from "@/app/ui/customers/table";

export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts = await data.json();
  return (
    <CustomersTable customers = {posts} />
  )
}