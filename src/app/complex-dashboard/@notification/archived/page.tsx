import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotificatin() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <div>
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}
