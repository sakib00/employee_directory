import { useState } from "react";

export function useEmployeeFilters(employees) {
  const [search, setSearch] = useState("");

  let filtered = employees;

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
  };
}
