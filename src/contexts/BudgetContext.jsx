import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);

    const maxPrice = 30;

    const contextValue = { budgetMode, setBudgetMode, maxPrice }

    return <BudgetContext.Provider value={contextValue}>
        {children}
    </BudgetContext.Provider>
}


function useBudget() {
    const context = useContext(BudgetContext);

    return context
}

export { BudgetProvider, useBudget }