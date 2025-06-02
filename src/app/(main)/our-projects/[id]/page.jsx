import OurProjectItem from '@/components/views/OurProjectItem';

const ourServices = ({ params }) => {
  const decodedId = decodeURIComponent(params.id);
  return <OurProjectItem getParams={decodedId} />;
};

export default ourServices;
