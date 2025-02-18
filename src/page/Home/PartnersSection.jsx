const collaborators = [
  {
    id: 1,
    logo: "https://i.ibb.co/N2yhXc0/Amazon-Logo-1.webp",
    name: "Amazon",
    description:
      "Empowering students with the resources they need to innovate and grow.",
  },
  {
    id: 2,
    logo: "https://i.ibb.co/y50tm7z/samsung.webp",
    name: "Samsung",
    description:
      "Enhancing education through cutting-edge technology and innovation.",
  },
  {
    id: 3,
    logo: "https://i.ibb.co/VmGkhWL/spotifypng.webp",
    name: "Spotify",
    description:
      "Creating harmony in learning by integrating music into education.",
  },
  {
    id: 4,
    logo: "https://i.ibb.co/9YcQL1t/uni.png",
    name: "Stamford University",
    description:
      "Shaping the future of education with collaborative learning experiences.",
  },
];

const PartnersSection = () => {
  return (
    <section className="partners-section  py-10 px-5 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Partners & Collaborators
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {collaborators.map((partner) => (
          <div
            key={partner.id}
            className="partner-card bg-white shadow-md p-5 rounded-lg text-center"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} Logo`}
              className="w-24 h-24 mx-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
            <p className="text-gray-600 text-sm">{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
