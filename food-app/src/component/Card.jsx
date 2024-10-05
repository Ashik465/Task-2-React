

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, image }) => {
  return (
    <div className="bg-[#f4f4f4] shadow-lg rounded-lg p-6">
      <img src={image} alt={title} className="w-full h-auto object-cover rounded-xl" />
      <h2 className="text-2xl font-bold mt-4 text-center">{title}</h2>
      <p className="mt-2 text-center">{description}</p>
    </div>
  );
};

export default Card;
