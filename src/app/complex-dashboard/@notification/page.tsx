import { Card } from "@/components/card";
import Link from "next/link";

export default function Notificatin() {
  return (
    <Card>
      <div>notifications</div>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}
