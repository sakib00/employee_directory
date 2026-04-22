import { useState } from "react";

export function useEmployeeFilters(employees) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

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

  return {
    filtered,
    search,
    setSearch,
    department,
    setDepartment,
  };
}
