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
    month: "long",
    year: "numeric",
  });
}

export default function EmployeeModal({ employee, onClose }) {
  const initials = getInitials(employee.name);
  const avatarColor = getAvatarColor(employee.name);
  const statusStyle =
    STATUS_STYLES[employee.status] ?? "bg-gray-100 text-gray-600";

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-[#0d0d0d] px-6 pt-6 pb-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex items-center gap-4">
            <div
              className={`${avatarColor} w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shrink-0`}
            >
              {initials}
            </div>
            <div>
              <h2 className="text-white font-semibold text-xl">
                {employee.name}
              </h2>
              <p className="text-gray-400 text-sm mt-0.5">{employee.role}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-5">
          {/* Status + Department row */}
          <div className="flex items-center gap-3">
            <span
              className={`${statusStyle} text-xs font-medium px-3 py-1.5 rounded-full`}
            >
              {employee.status}
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">
              {employee.department}
            </span>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <DetailRow
              label="Start Date"
              value={formatDate(employee.startDate)}
            />
            <DetailRow label="Employee ID" value={`#${employee.id}`} />
          </div>

          {/* Skills */}
          {employee.skills && employee.skills.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {employee.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-[#0d0d0d] text-[#4ade80] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <span className="text-sm text-gray-400">{label}</span>
      <span className="text-sm font-medium text-gray-800">{value}</span>
    </div>
  );
}
