import { useState } from "react";

export function useEmployeeFilters(employees) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sort, setSort] = useState("name-asc");

  let filtered = employees;
  if (department !== "All") {
    filtered = filtered.filter((e) => e.department === department);
  }
  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (e) =>
        e.name.toLowerCase().includes(q) || e.role.toLowerCase().includes(q),
    );
  }

  filtered = [...filtered].sort((a, b) => {
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    if (sort === "name-desc") return b.name.localeCompare(a.name);
    if (sort === "date-new")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "date-old")
      return new Date(a.startDate) - new Date(b.startDate);
  });

  return {
    filtered,
    search,
    setSearch,
    department,
    setDepartment,
    sort,
    setSort,
  };
}
