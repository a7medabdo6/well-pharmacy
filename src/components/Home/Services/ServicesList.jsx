import SubTitle from "@/components/Mobile/Utilities/SubTitle";
import ServiceItem from "./ServiceItem";

const services = [
  {
    id: 1,
    img: "service_1.png",
    title: "Online doctors",
    desc: "You can consult with one of our online doctors in all specialties.",
  },
  {
    id: 2,
    img: "service_2.png",
    title: "Delivery to your room",
    desc: "Make a request to receive what you want at your hotel room.",
  },
  {
    id: 3,
    img: "service_3.png",
    title: "Call us",
    desc: "You can call our pharmacists to request what you want or send a prescription",
  },
];

const ServicesList = () => {
  return (
    <section className="mt-[20px] lg:mt-[60px]">
      <h2 className="text-primary mb-8 text-center hidden lg:block">
        Our services
      </h2>
      <div className="container">
        <SubTitle title="Our services" className="mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 p-4 bg-white lg:shadow-[0_18px_40px_0_rgba(0,0,0,0.12)] rounded-md">
          {services.map((service) => (
            <ServiceItem key={service.id} data={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
