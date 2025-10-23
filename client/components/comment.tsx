import { ImageComponent } from "@/components/ui/ImageComponent";

const Comment = () => {
    return (
        <div className="p-4 bg-slate-50 rounded-xl mb-8">
            <div className="flex items-center gap-4">
                <ImageComponent src="userImg.jpeg" alt="User Image" width={40} height={40} className="object-cover rounded-3xl" />
                <span className="font-semibold">John Doe</span>
                <span className="text-gray-500 text-sm">2 hours ago</span>
            </div>
            <div className="mt-4">
                <p className="text-gray-700">
                    This is a sample comment. It contains the user's thoughts and opinions.
                </p>
            </div> 
        </div>
    );
}

export default Comment;
