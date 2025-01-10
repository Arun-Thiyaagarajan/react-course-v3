import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpened(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpened(false);
    }

    const openModal = () => {
        setIsModalOpened(true);
    }
    const closeModal = () => {
        setIsModalOpened(false);
    }

    const funcValues = {
        isModalOpened, isSidebarOpened, openModal, openSidebar
        , closeModal, closeSidebar
    };

    return <AppContext.Provider value={funcValues}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}