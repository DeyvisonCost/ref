import { useState } from "react";

export const useAccordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(
            (previousValue) => !previousValue,
        );
    };

    return { toggle, isOpen };
};