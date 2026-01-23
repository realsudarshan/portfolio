import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

export default function AboutSection() {
  const stats = [
    {
      id: 1,
      icon: <RiFireLine className="text-[40px] text-orange-500 mr-[10px]" />,
      value: "2",
      label: "Years of Experience",
    },
    {
      id: 2,
      icon: <RiCupLine className="text-[40px] text-blue-500 mr-[10px]" />,
      value: "51",
      label: "Github Repositories",
    },
    {
      id: 3,
      icon: <RiGroupLine className="text-[40px] text-green-500 mr-[10px]" />,
      value: "5+",
      label: "Launched Projects",
    },
    {
      id: 4,
      icon: <RiTrophyLine className="text-[40px] text-yellow-500 mr-[10px]" />,
      value: "100",
      label: "Code Quality",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5 w-full max-w-5xl mx-auto mt-12">
      {stats.map((item) => (
        <div 
          key={item.id} 
          className="flex items-center justify-center sm:justify-start min-w-[200px]"
        >
          {item.icon}
          <div>
            <h3 className="m-0 text-2xl font-bold leading-tight">{item.value}</h3>
            <span className="text-base text-gray-600 dark:text-gray-400">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}