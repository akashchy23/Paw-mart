import { NavLink } from "react-router";
import { Home, User, List, Settings, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Sidebar = () => {
    const { role } = use(AuthContext)

    const handleLogout = () => {
        signOut(auth)

    }

    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`;

    return (
        <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
            <h2 className="text-2xl font-bold mb-8 text-center">Dashboard</h2>

            <nav className="space-y-3">
                {
                    role == 'admin' &&  (
                        <NavLink to="/dashboard/allusers" className={linkClass}>
                            <Home size={20} />
                            All Users
                        </NavLink>
                    )
                }

                <NavLink to="/dashboard/myorders" className={linkClass}>
                    <Home size={20} />
                    My Orders
                </NavLink>
                <NavLink to="/dashboard/mygraph" className={linkClass}>
                    <Home size={20} />
                    My Graph
                </NavLink>

                <NavLink to="/dashboard/profile" className={linkClass}>
                    <User size={20} />
                    Profile
                </NavLink>

                <NavLink to="/dashboard/addservices" className={linkClass}>
                    <List size={20} />
                    Add Services
                </NavLink>

            </nav>

            <div className="mt-10">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 p-3 w-full rounded-lg hover:bg-red-600 bg-red-500"
                >
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
