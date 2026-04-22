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
    { value: "date-new", label: "Newest" },
    { value: "date-old", label: "Oldest" },
];


export { STATUS_STYLES, AVATAR_COLORS, DEPARTMENTS, SORT_OPTIONS };