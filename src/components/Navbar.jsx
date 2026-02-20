import { Link, NavLink } from "react-router-dom"
import { useBudget } from "../contexts/BudgetContext"



export default function Navbar() {

    const { budgetMode, setBudgetMode, maxPrice, setMaxPrice } = useBudget();

    function handleClick(budgetMode) {
        if (budgetMode === true) {
            setBudgetMode(false)
        } else {
            setBudgetMode(true)
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid fs-5">
                <Link className="navbar-brand fs-3" to="/">E-shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Prodotti</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about-us">Chi siamo</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex gap-3">
                        <button onClick={() => { handleClick(budgetMode) }} className="btn btn-primary">{budgetMode ? 'Disattiva Modalità Budget' : 'Attiva Modalità Budget'}</button>

                        <div className="d-flex gap-2">
                            <label htmlFor="userbudget" className="text-white">Budget</label>
                            <input type="number" name="budget" id="userbudget" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="form-control" min={0}/>
                        </div>

                        
                    </div>

                </div>
            </div>
        </nav>
    )
}