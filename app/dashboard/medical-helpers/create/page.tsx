import Form from '@/app/ui/medical-helpers/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
 
export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Medical Helpers', href: '/dashboard/medical-helpers' },
          {
            label: 'Create Medical Helper',
            href: '/dashboard/medical-helpers/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}