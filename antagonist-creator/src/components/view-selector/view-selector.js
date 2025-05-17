import { useState } from "react";
import styles from "./view-selector.module.css";

export const VIEW_TYPES = {
    COMPACT: "compact",
    EXPANDED: "expanded",
}

export const ViewSelector = ({ onViewChange }) => {

    const [currentView, setCurrentView] = useState(VIEW_TYPES.EXPANDED);

    const handleViewChange = (view) => {
        onViewChange(view);
    };
    
    return (
        <div className={styles.viewSelector}>
        <button onClick={() => handleViewChange("unique")}></button>
        </div>
    );
}