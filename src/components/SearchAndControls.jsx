const DEPARTMENTS = [
  "All",
  "Engineering",
  "Operations",
  "Product",
  "Infrastructure",
  "Data",
];

const SORT_OPTIONS = [
  { value: "name-asc", label: "A → Z" },
  { value: "name-desc", label: "Z → A" },
];

export function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      {/* Search icon */}
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search by name or role..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white ring-1 ring-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ade80]/50 transition"
      />
      {/* Clear button */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-4 h-4"
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
      )}
    </div>
  );
}

export function DepartmentFilter({ value, onChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none pl-4 pr-9 py-2.5 rounded-xl bg-white ring-1 ring-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4ade80]/50 transition cursor-pointer"
      >
        {DEPARTMENTS.map((dept) => (
          <option key={dept} value={dept}>
            {dept === "All" ? "All Departments" : dept}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

export function SortControls({ value, onChange }) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">
        Sort
      </span>
      {SORT_OPTIONS.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
              isActive
                ? "bg-[#0d0d0d] text-[#4ade80]"
                : "bg-white text-gray-500 ring-1 ring-gray-200 hover:ring-gray-300 hover:text-gray-700"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
