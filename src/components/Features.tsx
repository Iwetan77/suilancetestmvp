import React from "react";

const features = [
  {
    title: "Natural Language Processing",
    description: "Understand and respond to complex queries seamlessly.",
  },
  {
    title: "Efficient Learning",
    description: "Get smarter with every interaction.",
  },
  {
    title: "Customizable AI",
    description: "Tailor Claude AI to your unique needs.",
  },
];

const Features: React.FC = () => {
  return (
    <section className='py-20 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center text-gray-800'>
          Features
        </h2>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white shadow-md rounded-lg p-6 text-center'
            >
              <h3 className='text-xl font-semibold text-blue-600'>
                {feature.title}
              </h3>
              <p className='mt-4 text-gray-700'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
