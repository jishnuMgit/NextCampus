import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import React from 'react'

function Header() {
  return (
<>

<div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-3xl font-bold text-slate-900">
              Attendance Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              Monitor attendance across the entire school.
            </p>

          </div>

          <div className="flex gap-3">

            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>

            <Button>
              Mark Attendance
            </Button>

          </div>

        </div>
</>

)
}

export default Header