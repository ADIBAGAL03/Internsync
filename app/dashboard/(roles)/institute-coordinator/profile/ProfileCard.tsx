import { Card } from '@/components/ui/card';
import InstituteProfile from '@/types/institute-profile';

const ProfileCard = ({ profileData }: { profileData: InstituteProfile }) => {
  const fields = [
    { label: 'Full Name', value: profileData.users?.name || '-' },
    { label: 'Email', value: profileData.users?.email || '-' },
    { label: 'Contact', value: profileData.users?.contact || '-' },
    { label: 'Institute Name', value: profileData.name || '-' },
    { label: 'Institute Address', value: profileData.address || '-' },
    {
      label: 'Institute Email Domain',
      value: profileData.institute_email_domain || '-',
    },
    {
      label: 'Student Email Domain',
      value: profileData.student_email_domain || '-',
    },
  ];

  return (
    <Card className="p-5">
      <div className="grid gap-6 overflow-x-auto">
        {fields.map((field, index) => (
          <div
            key={index}
            className="sm:h-10 grid sm:grid-cols-5 sm:space-y-0 space-y-2"
          >
            <div className="col-span-2 my-auto text-muted-foreground">
              {field.label}
            </div>
            <div className="col-span-3 flex items-center">{field.value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProfileCard;
