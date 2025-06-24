import { ExpandableCard } from "./ui/expandable-card";

export default function ServicesCard({ title, description, benefits, icon: Icon, image }) {
  return (
    <ExpandableCard
      title={title}
      src={image}
      description={description}
      classNameExpanded="[&_h3]:text-black dark:[&_h3]:text-black [&_h3]:font-medium"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 mr-2 text-red-500" />
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      </div>
      {benefits.map((point, index) => (
        <p key={index} className="mb-2">• {point}</p>
      ))}
    </ExpandableCard>
  );
}
