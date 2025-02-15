import Form from '@/app/ui/medical-helpers/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { getMedicalHelperById } from '../../data';
 
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const medicalHelper = await getMedicalHelperById(id);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form medicalHelper={medicalHelper} />
    </main>
  );
}