import Link from "next/link";
import { Button } from "@/components/ui/button";
import E404pic from "@/public/404.png";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">

<Image src={E404pic} alt="404" height={300} width={300}/>
   
      <Button asChild className="mt-8">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}   