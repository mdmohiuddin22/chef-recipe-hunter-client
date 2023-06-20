import React from "react";

const CookingTips = () => {
  const tips = [
    {
      id: 1,
      imageSrc: "https://i.ibb.co/5Y4CR13/c742d-13413424-1738238286459134-1674502597-n.jpg",
      title: "Hone Those Knife Skills",
      description: "Always keep your fingers tucked in on your non-dominant hand, using your upper knuckles to guide your knife as you slice. If your finger tips are tucked in, you cant ever cut them! And for the highest degree of control over your knife. hold the knife by the blade, pinching the bottom of the blade between your thumb and the side of your forefinger. Grip your middle, ring, and pinky fingers around the handle for support, and avoid laying your forefinger over the spine of the knife",
    },
    {
      id: 2,
      imageSrc: "https://i.ibb.co/QnHDQj8/3ffe5-13707189-910911299034767-1122725820-n.jpg",
      title: "Don’t Forget the Garnish",
      description: "To make an impression on your guests, throw a simple garnish on your finished platter: mMicrogreens are easy and beautiful, or take an element from the dish, such as whole herb sprigs or extra spice, and add just a small amount to create a pop for the eye",
    },
    {
      id: 3,
      imageSrc: "https://i.ibb.co/pW17Qwc/ca09d-10424386-479982012185174-13059897-n.jpg",
      title: "Don’t Cry Over Onions",
      description: " “Put onions in ice water for 10 minutes before cutting them; this prevents them from causing your eyes to water.”",
    },
   
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cooking Tips from Top Chefs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tips.map((tip) => (
          <div key={tip.id} className="bg-gray-100 p-4 rounded">
            <img src={tip.imageSrc} alt={tip.title} className="w-full rounded" />
            <h3 className="text-lg font-bold mt-2 mb-1">{tip.title}</h3>
            <p className="mb-2">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CookingTips;
