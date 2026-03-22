import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group relative h-full border border-slate-800 bg-slate-900/40 rounded-2xl p-6 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1">
      <div className="relative">
        <div className="mb-6 inline-flex bg-slate-800/60 rounded-xl p-3">
          <Icon className="h-6 w-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
        </div>

        <h3 className="mb-3 font-display text-xl font-semibold text-slate-100">
          {title}
        </h3>

        <p className="text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
