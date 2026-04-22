import { useState } from "react";

import employees from "./data/applicants.json";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeModal from "./components/EmployeeModal";

export default function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onClick={setSelectedEmployee}
            />
          ))}
        </div>
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
