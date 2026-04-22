import { STATUS_STYLES } from "../constants/CONSTANTS";
import { formatDate, getAvatarColor, getInitials } from "../utils/helper";

export default function EmployeeCard({ employee, onClick }) {
  const initials = getInitials(employee.name);
  const avatarColor = getAvatarColor(employee.name);
  const statusStyle =
    STATUS_STYLES[employee.status] ?? "bg-gray-100 text-gray-600";

  return (
    <div
      onClick={() => onClick(employee)}
      className="group bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-100 hover:ring-[#1aff6e]/40 hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          className={`${avatarColor} w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold text-sm shrink-0`}
        >
          {initials}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-semibold text-gray-900 truncate group-hover:text-[#111827] transition-colors">
                {employee.name}
              </h3>
              <p className="text-sm text-gray-500 truncate">{employee.role}</p>
            </div>
            <span
              className={`${statusStyle} text-xs font-medium px-2.5 py-1 rounded-full shrink-0`}
            >
              {employee.status}
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
              {employee.department}
            </span>
            <span className="text-xs text-gray-400">
              Since {formatDate(employee.startDate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
