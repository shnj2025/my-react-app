import { useEffect, useState } from "react";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

const TechnologyCards = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading technologies...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <div key={tech.id} className="border rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start">
            <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{tech.badge}</span>
          </div>
          <h3 className="font-bold mt-3">{tech.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{tech.description}</p>
          <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
            <span>{tech.category}</span>
            <span>{tech.difficulty}</span>
            <span>⭐ {tech.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologyCards;