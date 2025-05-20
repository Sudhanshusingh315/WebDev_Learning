import { useState } from "react";
import "./App.css";
import {
    LayoutDashboard,
    CalendarDays,
    PenTool,
    BookOpen,
    MapPin,
    Bell,
    Settings,
    Info,
} from "lucide-react";

const sidebarItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Schedule", icon: CalendarDays },
    { name: "Design", icon: PenTool },
    { name: "Library", icon: BookOpen },
    { name: "Locations", icon: MapPin },
    { name: "Notifications", icon: Bell },
    { name: "Settings", icon: Settings },
    { name: "Support", icon: Info },
];

function App() {
    const [open, setOpen] = useState(false);

    return (
        <div className="container">
            <div
                className={`sidebar ${open ? "open" : ""}`}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                {sidebarItems?.map(({ name, icon: Icon }, index) => {
                    return (
                        <div className="sidebar-list">
                            <Icon size={20} />
                            <p>{name}</p>
                        </div>
                    );
                })}
            </div>
            <div className="content"></div>
        </div>
    );
}

export default App;
