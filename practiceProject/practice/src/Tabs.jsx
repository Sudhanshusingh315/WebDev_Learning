import "./test.css";
import { createContext, useContext } from "react";

// react compound patters
const TabContext = createContext(null);
export default function Tab({ currentTab, onChange, children }) {
    return (
        <div className="tab">
            <TabContext.Provider value={{ currentTab, onChange }}>
                {children}
            </TabContext.Provider>
        </div>
    );
}

Tab.HeadsContainer = ({ children }) => {
    return <div className="header">{children}</div>;
};

Tab.Item = ({ lable, index, children }) => {
    const { onChange } = useContext(TabContext);

    const handleClick = () => {
        onChange(index);
    };
    return <div onClick={handleClick}>{lable}</div>;
};

Tab.Container = ({ children }) => {
    return <div className="container">{children}</div>;
};

Tab.ContainerContent = ({ children, index }) => {
    const { currentTab } = useContext(TabContext);
    console.log(`currentTab is ${currentTab} and index is ${index}`);
    return (
        <div>
            {currentTab === index ? (
                <div className="test">{children}</div>
            ) : null}
        </div>
    );
};
