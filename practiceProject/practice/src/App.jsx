import { useState } from "react";
import "./App.css";
import Tab from "./Tabs";

export default function App() {
    const [currentTabIndex, setCurrentTabIndex] = useState(1);
    console.log("current tab index", currentTabIndex);
    const handleIndex = (index) => {
        setCurrentTabIndex(index);
    };
    return (
        <div>
            <Tab currentTab={currentTabIndex} onChange={handleIndex}>
                <Tab.HeadsContainer>
                    <Tab.Item lable="Tab 1" index={1} />
                    <Tab.Item lable="Tab 2" index={2} />
                    <Tab.Item lable="Tab 3" index={3} />
                </Tab.HeadsContainer>
                <Tab.Container>
                    <Tab.ContainerContent index={1}>
                        content 1
                    </Tab.ContainerContent>
                    <Tab.ContainerContent index={2}>
                        content 2
                    </Tab.ContainerContent>
                    <Tab.ContainerContent index={3}>
                        content 3
                    </Tab.ContainerContent>
                </Tab.Container>
            </Tab>
        </div>
    );
}
