import React from "react";
import { CheckCircle2, XCircle, Info, AlertCircle } from "lucide-react";

interface ToastNotificationProps {
  show: boolean;
  message: string;
  type: "success" | "error" | "info" | "warning";
  isDarkMode: boolean;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  show,
  message,
  type,
  isDarkMode,
}) => {
  if (!show) return null;

  const icons = {
    success: CheckCircle2,
    error: XCircle,
    info: Info,
    warning: AlertCircle,
  };

  const colors = {
    success: "from-green-500 to-emerald-500 border-green-400",
    error: "from-red-500 to-rose-500 border-red-400",
    info: "from-blue-500 to-indigo-500 border-blue-400",
    warning: "from-yellow-500 to-orange-500 border-yellow-400",
  };

  const Icon = icons[type];

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
      <div
        className={`px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[280px] backdrop-blur-sm border bg-gradient-to-r ${colors[type]} text-white`}
      >
        <Icon className="w-6 h-6" />
        <span className="font-medium text-sm">{message}</span>
      </div>
    </div>
  );
};
