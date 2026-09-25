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

type Props = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const StackSidebar = ({ stack, onRemove, onRemoveAll }: Props) => {
  return (
    <div className="w-full lg:w-72 shrink-0">
        <div className="border border-gray-200 rounded-xl p-5 sticky top-20">
        <h3 className="font-bold text-lg">Your Stack</h3>

        {stack.length === 0 ? (
          <>
            <p className="text-sm text-gray-500 mt-1">No technologies selected yet.</p>
            <div className="mt-4 border border-dashed rounded-lg py-10 text-center text-sm text-gray-400">
              Your stack is empty.
            </div>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-500 mt-1">
              {stack.length} Technology Selected
            </p>

            <div className="mt-4 flex flex-col gap-3">
              {stack.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
                >
                  <div className="flex items-center gap-3">
                    <img src={item.icon} alt={item.name} className="w-6 h-6" />
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={onRemoveAll}
              className="w-full mt-4 border border-red-400 text-red-500 font-medium py-2 rounded-lg hover:bg-red-50"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default StackSidebar;