import AllEvents from '@/src/components/events/events-page';

const EventPage = ({data}) => {
    return <AllEvents data= {data} />;
};

export default EventPage;

export async function getStaticProps(){
  const{events_categories} = await import('/data/data.json');
  console.log(events_categories);

  return {
    props: {
      data: events_categories,
    },
  };
}
