import { Card } from "./ui/Card";
import { Link, Outlet } from "react-router-dom";
import { Users } from "lucide-react";

export default function UserList() {
    return (
        <div>
            <Card className="bg-white shadow-xl rounded-2xl p-6 mt-12 w-full max-w-md mx-auto">
                <div className="flex items-center gap-2">
                    <Users className="text-blue-500" size={20} />
                    <h3 className="text-xl font-semibold text-gray-800">Users</h3>
                </div>
                <ul className="mt-4 space-y-2">
                    <li>
                        <Link to="/user/john" className="block w-full">
                            <div className="bg-gray-100 text-gray-800 rounded-xl flex items-center px-6 py-4 transition-transform transform hover:scale-105 cursor-pointer hover:bg-blue-500 hover:text-white shadow-md">
                                John
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/joe" className="block w-full">
                            <div className="bg-gray-100 text-gray-800 rounded-xl flex items-center px-6 py-4 transition-transform transform hover:scale-105 cursor-pointer hover:bg-blue-500 hover:text-white shadow-md">
                                Joe
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/Stefan" className="block w-full">
                            <div className="bg-gray-100 text-gray-800 rounded-xl flex items-center px-6 py-4 transition-transform transform hover:scale-105 cursor-pointer hover:bg-blue-500 hover:text-white shadow-md">
                                Stefan
                            </div>
                        </Link>
                    </li>
                </ul>
            </Card>
            <Outlet />
        </div>
    );
}
