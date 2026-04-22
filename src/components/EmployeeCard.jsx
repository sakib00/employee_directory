const STATUS_STYLES = {
  Active: "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200",
  "On Leave": "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
  Probation: "bg-rose-100 text-rose-700 ring-1 ring-rose-200",
};

const AVATAR_COLORS = [
  "bg-violet-500",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-indigo-500",
];

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(name) {
  const index = name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

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
