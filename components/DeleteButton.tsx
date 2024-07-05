"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: any }) {
	const router = useRouter();
	const deletePost = async (id: any) => {
		try {
			await axios.delete("/api/post", {
				data: {
					id,
				},
			});
		} catch (error: any) {
			toast.success("Error", error);
		} finally {
			router.refresh();
			toast.success("Deleted");
		}
	};

	return (
		<Link
			href=""
			className="text-[15px] cursor-pointer text-black font-serif font-medium bg-slate-200 px-6 py-3 rounded-lg"
			onClick={() => deletePost(id)}>
			Delete
		</Link>
	);
}
