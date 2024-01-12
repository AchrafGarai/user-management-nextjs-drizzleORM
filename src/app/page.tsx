import Banner from "@/components/ui/alert-banner";
import { db } from "@/db";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import NewUserDialogue from "./users/new-user-dialog";
import PaginateTable from "@/components/pagination";

export default async function Home() {
	const res = await db.query.users.findMany();

	if (res.length === 0)
		return (
			<Banner
				title="No users found!"
				subTitle="Start by inviting new users to your app"
			/>
		);

	return (
		<main>
			<div className="flex gap-2  mb-8">
				<span className="text-2xl font-semibold flex-grow">Users</span>
				<NewUserDialogue />
			</div>
			<DataTable columns={columns} data={res} />
			<PaginateTable />
		</main>
	);
}
