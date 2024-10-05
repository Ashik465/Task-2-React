
import Card from './Card';

const MenuCard = () => {
  const cards = [
    { title: 'Pizza', description: 'Pizza is round shape made with cheese,onion,tomato etc', image: '/banner_1.png' },
    { title: 'Burger', description: 'Berger made with one bun which include chicken or beef,cheese, mayo etc.', image: '/banner_1.png' },
    { title: 'Club sandwich', description: 'Club sandwich is made by pound bread which include chicken, cheese, mayo etc.', image: '/banner_1.png' },
    { title: 'Chicken masala', description: 'Chicken masala is one kind spacial curry which can be eaten with rich.', image: '/banner_1.png' }
  ];

  return (
    <section  className="py-16 bg-white">
        <h1 className='text-center text-4xl pb-6 font-bold'>Our Menu</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-3">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default MenuCard;
