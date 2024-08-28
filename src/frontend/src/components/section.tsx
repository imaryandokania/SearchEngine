import { cn } from "@/lib/utils";
import {
  CameraIcon,
  ListPlusIcon,
  SparkleIcon,
  TicketIcon,
  TextSearchIcon,
} from "lucide-react";

import { motion } from "framer-motion";

export const Section = ({
  title,
  children,
  animate = true,
  streaming = false,
}: {
  title: "JiraTickets" | "Summary" | "Related" | "Images";
  children: React.ReactNode;
  animate?: boolean;
  streaming?: boolean;
}) => {
  const iconMap = {
    JiraTickets: TicketIcon,
    Summary: TextSearchIcon,
    Related: ListPlusIcon,
    Images: CameraIcon,
  };

  const IconComponent = iconMap[title] || TextSearchIcon;

  return (
    <div
      className={cn(
        "flex flex-col mb-8",
        // animate ? "animate-in fade-in duration-1000 ease-out" : "",
      )}
    >
      <div className="flex items-center space-x-2">
        {title === "Summary" && streaming ? (
          // <motion.div
          //   animate={{ rotate: [0, 360] }}
          //   transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          // >
            <IconComponent size={22} />
          // </motion.div>
        ) : (
          <IconComponent size={22} />
        )}
        <div className="text-lg font-medium">{title}</div>
      </div>
      <div className="pt-1">{children}</div>
    </div>
  );
};
