"use client";

import {
  Search,
  Filter,
  UserPlus,
  Download,
  Printer,
} from "lucide-react";
import { useState } from "react";
import { Topbar } from "../../../../components/dashboard/topbar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
} from "../../../../components/ui/card";

const students = [
  {
    name: "Ava Patel",
    admission: "ADM-1042",
    className: "Grade 10",
    section: "A",
    roll: "14",
    parent: "Ravi Patel",
    phone: "+91 98765 43210",
    status: "Active",
  },
  {
    name: "Noah Chen",
    admission: "ADM-1038",
    className: "Grade 8",
    section: "B",
    roll: "08",
    parent: "Mina Chen",
    phone: "+91 87654 32109",
    status: "Pending",
  },
  {
    name: "Maya Singh",
    admission: "ADM-1029",
    className: "Grade 12",
    section: "A",
    roll: "21",
    parent: "Arjun Singh",
    phone: "+91 76543 21098",
    status: "Active",
  },
  {
    name: "Leo Gomez",
    admission: "ADM-1017",
    className: "Grade 9",
    section: "C",
    roll: "03",
    parent: "Sofia Gomez",
    phone: "+91 65432 10987",
    status: "Suspended",
  },
{
    name: "Leo Gomez",
    admission: "ADM-1018",
    className: "Grade 9",
    section: "C",
    roll: "03",
    parent: "Sofia Gomez",
    phone: "+91 65432 10987",
    status: "Suspended",
  },
  {
    name: "Leo Gomez",
    admission: "ADM-1019",
    className: "Grade 9",
    section: "C",
    roll: "03",
    parent: "Sofia Gomez",
    phone: "+91 65432 10987",
    status: "Suspended",
  },
  {
    name: "Leo Gomez",
    admission: "ADM-1020",
    className: "Grade 9",
    section: "C",
    roll: "03",
    parent: "Sofia Gomez",
    phone: "+91 65432 10987",
    status: "Suspended",
  },
  {
    name: "Leo Gomez",
    admission: "ADM-1021",
    className: "Grade 9",
    section: "C",
    roll: "03",
    parent: "Sofia Gomez",
    phone: "+91 65432 10987",
    status: "Suspended",
  },
  {
    name: "Leo Gomez",
    admission: "ADM-1022",
    className: "Grade 9",
    section: "C",
    roll: "03",
    parent: "Sofia Gomez",
    phone: "+91 65432 10987",
    status: "Suspended",
  },
];


export default function StudentsPage() {

    const ITEMS_PER_PAGE = 20;

const [currentPage, setCurrentPage] = useState(1);

const totalPages = Math.ceil(students.length / ITEMS_PER_PAGE);

const currentStudents = students.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE
);

  return (
    <div className="min-h-screen bg-slate-50">

      <Topbar
        title="Students"
        // subtitle="Manage admissions, students and parent records."
      />

      <main className="space-y-6 p-4 sm:p-6 lg:p-8">

        {/* Header */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Student Module
            </h1>

            <p className="mt-2 text-slate-500">
              Manage admissions, status and family records.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">

            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>

            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Student
            </Button>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {[
            {
              label: "Total Students",
              value: "12,840",
              color: "text-blue-600",
            },
            {
              label: "Boys",
              value: "6,710",
              color: "text-violet-600",
            },
            {
              label: "Girls",
              value: "6,130",
              color: "text-emerald-600",
            },
            {
              label: "New Admissions",
              value: "184",
              color: "text-amber-600",
            },
          ].map((item) => (
            <Card
              key={item.label}
              className="border-slate-200 shadow-sm"
            >
              <CardContent className="p-6">

                <p className="text-sm text-slate-500">
                  {item.label}
                </p>

                <h2
                  className={`mt-3 text-3xl font-bold ${item.color}`}
                >
                  {item.value}
                </h2>

              </CardContent>
            </Card>
          ))}

        </div>

        {/* Search */}

        <Card className="border-slate-200 shadow-sm">

          <CardContent className="space-y-5 p-6">

            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

              <div className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">

                <Search
                  className="text-slate-500"
                  size={18}
                />

                <input
                  className="w-full bg-transparent outline-none"
                  placeholder="Search by name, admission number, parent or phone..."
                />

              </div>

              <div className="flex flex-wrap gap-3">

                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>

                <Button variant="outline">
                  <Printer className="mr-2 h-4 w-4" />
                  Print ID Cards
                </Button>

              </div>

            </div>

                        {/* ================= Desktop Table ================= */}

            <div className="hidden overflow-x-auto lg:block">
              <table className="min-w-[800px] w-full text-left text-sm">
                <thead className="sticky top-0 border-b border-slate-200 bg-white text-slate-500">
                  <tr>
                    <th className="px-4 py-4">Student</th>
                    <th className="px-4 py-4">Admission</th>
                    <th className="px-4 py-4">Class</th>
                    <th className="px-4 py-4">Section</th>
                    <th className="px-4 py-4">Roll</th>
                    <th className="px-4 py-4">Parent</th>
                    <th className="px-4 py-4">Phone</th>
                    <th className="px-4 py-4">Status</th>
                    <th className="px-4 py-4 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {currentStudents.map((student) => (
                    <tr
                      key={student.admission}
                      className="border-b border-slate-100 transition hover:bg-slate-50"
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                            {student.name.charAt(0)}
                          </div>

                          <div>
                            <p className="font-semibold text-slate-900">
                              {student.name}
                            </p>

                            <p className="text-xs text-slate-500">
                              Student
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-slate-600">
                        {student.admission}
                      </td>

                      <td className="px-4 py-4 text-slate-600">
                        {student.className}
                      </td>

                      <td className="px-4 py-4 text-slate-600">
                        {student.section}
                      </td>

                      <td className="px-4 py-4 text-slate-600">
                        {student.roll}
                      </td>

                      <td className="px-4 py-4">
                        <div>
                          <p className="font-medium">
                            {student.parent}
                          </p>

                          <p className="text-xs text-slate-500">
                            Guardian
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-slate-600">
                        {student.phone}
                      </td>

                      <td className="px-4 py-4">
                        <Badge
                          className={
                            student.status === "Active"
                              ? "bg-emerald-100 text-emerald-700"
                              : student.status === "Pending"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-rose-100 text-rose-700"
                          }
                        >
                          {student.status}
                        </Badge>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex justify-end gap-2">

                          <Button
                            size="sm"
                            variant="outline"
                          >
                            View
                          </Button>

                          <Button
                            size="sm"
                            variant="outline"
                          >
                            Edit
                          </Button>

                          <Button
                            size="sm"
                            variant="destructive"
                          >
                            Delete
                          </Button>

                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ================= Mobile Cards ================= */}

            <div className="space-y-4 lg:hidden">
              {students.map((student) => (
                <Card
                  key={student.admission}
                  className="border-slate-200 shadow-sm"
                >
                  <CardContent className="space-y-5 p-5">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                          {student.name.charAt(0)}
                        </div>

                        <div>

                          <h3 className="font-semibold text-slate-900">
                            {student.name}
                          </h3>

                          <p className="text-sm text-slate-500">
                            {student.admission}
                          </p>

                        </div>

                      </div>

                      <Badge
                        className={
                          student.status === "Active"
                            ? "bg-emerald-100 text-emerald-700"
                            : student.status === "Pending"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-rose-100 text-rose-700"
                        }
                      >
                        {student.status}
                      </Badge>

                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">

                      <div>
                        <p className="text-slate-500">
                          Class
                        </p>

                        <p className="font-medium">
                          {student.className}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-500">
                          Section
                        </p>

                        <p className="font-medium">
                          {student.section}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-500">
                          Parent
                        </p>

                        <p className="font-medium">
                          {student.parent}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-500">
                          Phone
                        </p>

                        <p className="font-medium">
                          {student.phone}
                        </p>
                      </div>

                    </div>

                    <div className="grid grid-cols-3 gap-2">

                      <Button
                        size="sm"
                        variant="outline"
                      >
                        View
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                      >
                        Edit
                      </Button>

                      <Button
                        size="sm"
                        variant="destructive"
                      >
                        Delete
                      </Button>

                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 md:flex-row md:items-center md:justify-between">

  <p className="text-sm text-slate-500">
    Showing{" "}
    <span className="font-semibold">
      {(currentPage - 1) * ITEMS_PER_PAGE + 1}
    </span>{" "}
    -
    <span className="font-semibold">
      {" "}
      {Math.min(currentPage * ITEMS_PER_PAGE, students.length)}
    </span>{" "}
    of{" "}
    <span className="font-semibold">
      {students.length}
    </span>{" "}
    students
  </p>

  <div className="flex flex-wrap items-center gap-2">

    <Button
      variant="outline"
      size="sm"
      disabled={currentPage === 1}
      onClick={() =>
        setCurrentPage((prev) => prev - 1)
      }
    >
      Previous
    </Button>

    {Array.from({ length: totalPages }).map((_, index) => {
      const page = index + 1;

      return (
        <Button
          key={page}
          size="sm"
          variant={
            page === currentPage
              ? "default"
              : "outline"
          }
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Button>
      );
    })}

    <Button
      variant="outline"
      size="sm"
      disabled={currentPage === totalPages}
      onClick={() =>
        setCurrentPage((prev) => prev + 1)
      }
    >
      Next
    </Button>

  </div>

</div>

          </CardContent>
        </Card>
        
        </main>
    </div>
  );
}   