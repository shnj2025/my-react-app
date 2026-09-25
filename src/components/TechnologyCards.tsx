import { useEffect, useState } from "react";
import StackSidebar from "./StackSidebar";
import { toast } from 'react-toastify';


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
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

 const handleAdd = (tech: Technology) => {
  const alreadyAdded = stack.some((item) => item.id === tech.id);
  if (alreadyAdded) {
    toast.warning(`${tech.name} is already in your stack!`);
    return;
  }
  setStack([...stack, tech]);
  toast.success(`${tech.name} added to your stack!`);
};

const handleRemove = (id: string) => {
  const removedTech = stack.find((item) => item.id === id);
  setStack(stack.filter((item) => item.id !== id));
  if (removedTech) {
    toast.info(`${removedTech.name} removed from your stack.`);
  }
};

const handleRemoveAll = () => {
  setStack([]);
  toast.info('All technologies removed from your stack.');
};

  if (loading) {
    return <p className="text-center py-10">Loading technologies...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold">
        Explore the <span className="text-pink-600">Technologies</span>
      </h2>
      <p className="text-gray-500 mt-1">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-8 flex flex-col lg:flex-row gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {technologies.map((tech) => {
            const isAdded = stack.some((item) => item.id === tech.id);
            return (
              <div
                key={tech.id}
               className={`border rounded-xl p-5 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
               isAdded ? "border-pink-400" : "border-gray-200"
               }`}
              >
                <div className="flex justify-between items-start">
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                   <span className="text-xs bg-pink-50 text-pink-600 font-medium px-2 py-1 rounded-full">
                  {tech.badge}
                 </span>
                </div>

                <h3 className="font-bold mt-3">{tech.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{tech.description}</p>

                <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
                  <span>{tech.difficulty}</span>
                  <span>⭐ {tech.rating}</span>
                </div>

                <button
                  onClick={() => handleAdd(tech)}
                  disabled={isAdded}
                  className={`w-full mt-4 py-2 rounded-lg font-medium ${
                    isAdded
                      ? "bg-pink-100 text-pink-600 cursor-not-allowed"
                      : "bg-gray-900 text-white hover:opacity-90"
                  }`}
                >
                  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
              </div>
            );
          })}
        </div>

        <StackSidebar stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
      </div>
    </div>
  );
};

export default TechnologyCards;