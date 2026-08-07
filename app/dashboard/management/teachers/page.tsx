"use client";

import { useState } from "react";

import {
  Search,
  Filter,
  UserPlus,
  Download,
  Printer,
} from "lucide-react";

import { Topbar } from "../../../../components/dashboard/topbar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
} from "../../../../components/ui/card";

const teachers = [
  {
    id: "EMP-1001",
    name: "John Anderson",
    department: "Mathematics",
    subject: "Algebra",
    qualification: "M.Sc Mathematics",
    phone: "+91 9876543210",
    email: "john@nextcampus.com",
    joining: "12 Jun 2023",
    status: "Active",
  },
  {
    id: "EMP-1002",
    name: "Sarah Wilson",
    department: "Science",
    subject: "Physics",
    qualification: "M.Sc Physics",
    phone: "+91 9876543200",
    email: "sarah@nextcampus.com",
    joining: "08 Jan 2024",
    status: "Active",
  },
  {
    id: "EMP-1003",
    name: "David Miller",
    department: "English",
    subject: "Literature",
    qualification: "M.A English",
    phone: "+91 9123456789",
    email: "david@nextcampus.com",
    joining: "19 Sep 2022",
    status: "Leave",
  },
  {
    id: "EMP-1004",
    name: "Emily Thomas",
    department: "Computer Science",
    subject: "Programming",
    qualification: "MCA",
    phone: "+91 9988776655",
    email: "emily@nextcampus.com",
    joining: "02 Apr 2025",
    status: "Inactive",
  },
  {
    id: "EMP-1005",
    name: "Michael Brown",
    department: "Mathematics",
    subject: "Calculus",
    qualification: "M.Sc Mathematics",
    phone: "+91 9812345678",
    email: "michael@nextcampus.com",
    joining: "15 Mar 2023",
    status: "Active",
  },
  {
    id: "EMP-1006",
    name: "Jessica Lee",
    department: "Science",
    subject: "Chemistry",
    qualification: "M.Sc Chemistry",
    phone: "+91 9765432109",
    email: "jessica@nextcampus.com",
    joining: "22 Jul 2022",
    status: "Active",
  },
  {
    id: "EMP-1007",
    name: "Robert Garcia",
    department: "History",
    subject: "World History",
    qualification: "M.A History",
    phone: "+91 9654321098",
    email: "robert@nextcampus.com",
    joining: "05 Nov 2021",
    status: "Leave",
  },
  {
    id: "EMP-1008",
    name: "Amanda Patel",
    department: "Computer Science",
    subject: "Data Structures",
    qualification: "M.Tech CSE",
    phone: "+91 9543210987",
    email: "amanda@nextcampus.com",
    joining: "18 Feb 2024",
    status: "Active",
  },
  {
    id: "EMP-1009",
    name: "Christopher Moore",
    department: "English",
    subject: "Grammar",
    qualification: "M.A English",
    phone: "+91 9432109876",
    email: "chris@nextcampus.com",
    joining: "30 Aug 2023",
    status: "Active",
  },
  {
    id: "EMP-1010",
    name: "Olivia Martinez",
    department: "Science",
    subject: "Biology",
    qualification: "M.Sc Biology",
    phone: "+91 9321098765",
    email: "olivia@nextcampus.com",
    joining: "11 May 2022",
    status: "Inactive",
  },
  {
    id: "EMP-1011",
    name: "Daniel Kim",
    department: "Mathematics",
    subject: "Geometry",
    qualification: "M.Sc Mathematics",
    phone: "+91 9210987654",
    email: "daniel@nextcampus.com",
    joining: "07 Dec 2023",
    status: "Active",
  },
  {
    id: "EMP-1012",
    name: "Sophia Nguyen",
    department: "Commerce",
    subject: "Accountancy",
    qualification: "M.Com",
    phone: "+91 9109876543",
    email: "sophia@nextcampus.com",
    joining: "25 Jan 2024",
    status: "Active",
  },
  {
    id: "EMP-1013",
    name: "James Thompson",
    department: "Physical Education",
    subject: "Sports Science",
    qualification: "M.P.Ed",
    phone: "+91 9098765432",
    email: "james@nextcampus.com",
    joining: "14 Jun 2021",
    status: "Leave",
  },
  {
    id: "EMP-1014",
    name: "Isabella Rossi",
    department: "Arts",
    subject: "Fine Arts",
    qualification: "MFA",
    phone: "+91 8987654321",
    email: "isabella@nextcampus.com",
    joining: "03 Oct 2022",
    status: "Active",
  },
  {
    id: "EMP-1015",
    name: "William Chen",
    department: "Computer Science",
    subject: "Web Development",
    qualification: "MCA",
    phone: "+91 8876543210",
    email: "william@nextcampus.com",
    joining: "29 Apr 2023",
    status: "Active",
  },
  {
    id: "EMP-1016",
    name: "Mia Johnson",
    department: "Science",
    subject: "Environmental Science",
    qualification: "M.Sc Environmental Science",
    phone: "+91 8765432109",
    email: "mia@nextcampus.com",
    joining: "16 Sep 2024",
    status: "Active",
  },
  {
    id: "EMP-1017",
    name: "Benjamin Wright",
    department: "Mathematics",
    subject: "Statistics",
    qualification: "M.Sc Statistics",
    phone: "+91 8654321098",
    email: "benjamin@nextcampus.com",
    joining: "21 Feb 2022",
    status: "Inactive",
  },
  {
    id: "EMP-1018",
    name: "Charlotte Davis",
    department: "English",
    subject: "Creative Writing",
    qualification: "M.A English Literature",
    phone: "+91 8543210987",
    email: "charlotte@nextcampus.com",
    joining: "09 Jul 2023",
    status: "Active",
  },
  {
    id: "EMP-1019",
    name: "Lucas Hernandez",
    department: "Commerce",
    subject: "Business Studies",
    qualification: "MBA",
    phone: "+91 8432109876",
    email: "lucas@nextcampus.com",
    joining: "27 Nov 2021",
    status: "Leave",
  },
  {
    id: "EMP-1020",
    name: "Ava Sharma",
    department: "Computer Science",
    subject: "Artificial Intelligence",
    qualification: "M.Tech AI",
    phone: "+91 8321098765",
    email: "ava@nextcampus.com",
    joining: "04 Mar 2025",
    status: "Active",
  },
    {
    id: "EMP-1021",
    name: "Ava Sharma",
    department: "Computer Science",
    subject: "Artificial Intelligence",
    qualification: "M.Tech AI",
    phone: "+91 8321098765",
    email: "ava@nextcampus.com",
    joining: "04 Mar 2025",
    status: "Active",
  },
];

const ITEMS_PER_PAGE = 10;

export default function TeachersPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    teachers.length / ITEMS_PER_PAGE
  );

  const currentTeachers = teachers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-slate-50">

      <Topbar
        title="Teachers"
        // subtitle="Manage teachers, departments and subjects."
      />

      <main className="space-y-6 p-4 sm:p-6 lg:p-8">

        {/* Header */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Teacher Module
            </h1>

            <p className="mt-2 text-slate-500">
              Manage teachers, departments,
              subjects and employee records.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">

            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>

            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Teacher
            </Button>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {[
            {
              title: "Total Teachers",
              value: "148",
              color: "text-blue-600",
            },
            {
              title: "Departments",
              value: "14",
              color: "text-violet-600",
            },
            {
              title: "Active",
              value: "136",
              color: "text-emerald-600",
            },
            {
              title: "New Joining",
              value: "12",
              color: "text-amber-600",
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="shadow-sm"
            >
              <CardContent className="p-6">

                <p className="text-sm text-slate-500">
                  {item.title}
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

        <Card>

          <CardContent className="space-y-6 p-6">

            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

              <div className="flex w-full items-center gap-3 rounded-xl border bg-slate-50 px-4 py-3">

                <Search
                  size={18}
                  className="text-slate-500"
                />

                <input
                  className="w-full bg-transparent outline-none"
                  placeholder="Search teacher..."
                />

              </div>

              <div className="flex flex-wrap gap-3">

                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>

                <Button variant="outline">
                  <Printer className="mr-2 h-4 w-4" />
                  Print
                </Button>

              </div>

            </div>
                        {/* ================= Teacher Table ================= */}

<div className="hidden lg:block max-w-[1100px] rounded-xl border border-slate-200 overflow-hidden">
  <div className="h-[800px] overflow-auto">

    <table className="min-w-[1500px] w-full text-sm">

      <thead className="sticky top-0 z-20 bg-white border-b border-slate-200 shadow-sm">
        <tr>
          <th className="px-4 py-4 text-left">Teacher</th>
          <th className="px-4 py-4 text-left">Employee ID</th>
          <th className="px-4 py-4 text-left">Department</th>
          <th className="px-4 py-4 text-left">Subject</th>
          <th className="px-4 py-4 text-left">Qualification</th>
          <th className="px-4 py-4 text-left">Phone</th>
          <th className="px-4 py-4 text-left">Email</th>
          <th className="px-4 py-4 text-left">Joining</th>
          <th className="px-4 py-4 text-left">Status</th>
          <th className="px-4 py-4 text-right">Actions</th>
        </tr>
      </thead>

      <tbody>
        {currentTeachers.map((teacher) => (
          <tr
            key={teacher.id}
            className="border-b border-slate-100 hover:bg-slate-50 transition"
          >
            <td className="px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                  {teacher.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    {teacher.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    Teacher
                  </p>
                </div>
              </div>
            </td>

            <td className="px-4 py-4">{teacher.id}</td>

            <td className="px-4 py-4">
              {teacher.department}
            </td>

            <td className="px-4 py-4">
              {teacher.subject}
            </td>

            <td className="px-4 py-4">
              {teacher.qualification}
            </td>

            <td className="px-4 py-4">
              {teacher.phone}
            </td>

            <td className="px-4 py-4">
              {teacher.email}
            </td>

            <td className="px-4 py-4">
              {teacher.joining}
            </td>

            <td className="px-4 py-4">
              <Badge
                className={
                  teacher.status === "Active"
                    ? "bg-emerald-100 text-emerald-700"
                    : teacher.status === "On Leave"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-rose-100 text-rose-700"
                }
              >
                {teacher.status}
              </Badge>
            </td>

            <td className="px-4 py-4">
              <div className="flex justify-end gap-2">
                <Button size="sm" variant="outline">
                  View
                </Button>

                <Button size="sm" variant="outline">
                  Edit
                </Button>

                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </div>
            </td>

          </tr>
        ))}
      </tbody>

    </table>

  </div>
</div>

            {/* ================= Mobile Cards ================= */}

            <div className="space-y-4 lg:hidden">

              {currentTeachers.map((teacher) => (
                <Card key={teacher.id}>

                  <CardContent className="space-y-5 p-5">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                          {teacher.name.charAt(0)}
                        </div>

                        <div>

                          <h3 className="font-semibold text-slate-900">
                            {teacher.name}
                          </h3>

                          <p className="text-sm text-slate-500">
                            {teacher.id}
                          </p>

                        </div>

                      </div>

                      <Badge
                        className={
                          teacher.status === "Active"
                            ? "bg-emerald-100 text-emerald-700"
                            : teacher.status === "On Leave"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-rose-100 text-rose-700"
                        }
                      >
                        {teacher.status}
                      </Badge>

                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">

                      <div>
                        <p className="text-slate-500">
                          Department
                        </p>

                        <p className="font-medium">
                          {teacher.department}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-500">
                          Subject
                        </p>

                        <p className="font-medium">
                          {teacher.subject}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-500">
                          Phone
                        </p>

                        <p className="font-medium">
                          {teacher.phone}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-500">
                          Joining
                        </p>

                        <p className="font-medium">
                          {teacher.joining}
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

                        {/* ================= Pagination ================= */}

            <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 md:flex-row md:items-center md:justify-between">

              <div className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-semibold">
                  {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                </span>{" "}
                -
                <span className="font-semibold">
                  {" "}
                  {Math.min(
                    currentPage * ITEMS_PER_PAGE,
                    teachers.length
                  )}
                </span>{" "}
                of{" "}
                <span className="font-semibold">
                  {teachers.length}
                </span>{" "}
                teachers
              </div>

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

                {Array.from({
                  length: totalPages,
                }).map((_, index) => {
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
                      onClick={() =>
                        setCurrentPage(page)
                      }
                    >
                      {page}
                    </Button>
                  );
                })}

                <Button
                  variant="outline"
                  size="sm"
                  disabled={
                    currentPage === totalPages
                  }
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

        {/* ================= Empty State ================= */}

        {false && (
          <Card className="border-dashed border-slate-300">

            <CardContent className="flex flex-col items-center justify-center py-24">

              <div className="rounded-full bg-slate-100 p-5">
                <UserPlus
                  size={40}
                  className="text-slate-500"
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                No Teachers Found
              </h3>

              <p className="mt-2 max-w-md text-center text-slate-500">
                There are no teachers matching your
                current filters.
              </p>

              <Button className="mt-6">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Teacher
              </Button>

            </CardContent>

          </Card>
        )}

      </main>

    </div>
  );
}