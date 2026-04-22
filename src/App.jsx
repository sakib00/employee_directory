import { useState } from "react";

import employees from "./data/applicants.json";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeModal from "./components/EmployeeModal";
import {
  SearchBar,
  DepartmentFilter,
  SortControls,
} from "./components/SearchAndControls";
import { useEmployeeFilters } from "./hooks/useEmployeeFilters";

export default function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const {
    filtered,
    search,
    setSearch,
    department,
    setDepartment,
    sort,
    setSort,
  } = useEmployeeFilters(employees);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0d0d0d] px-6 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#4ade80] text-[#0d0d0d] font-bold text-sm px-3 py-1.5 rounded-lg tracking-tight">
              Tiimely
            </div>
            <span className="text-gray-400 text-sm hidden sm:block">
              Employee Directory
            </span>
          </div>
          <span className="text-xs text-gray-500">
            {filtered.length} of {employees.length} employees
          </span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <div className="sm:w-52">
            <DepartmentFilter value={department} onChange={setDepartment} />
          </div>
        </div>
        <SortControls value={sort} onChange={setSort} />
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-medium">No employees found</p>
            <p className="text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                onClick={setSelectedEmployee}
              />
            ))}
          </div>
        )}
      </main>
      {/* Modal */}
      {selectedEmployee && (
        <EmployeeModal
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
}
