import React from "react";
import { Routes, Route} from "react-router-dom";
import AdminDashboard from "../pages/admin/adminDashboard";

function AdminRoutes(){

    return (
        <Routes>
            <Route path="/admin" element={<AdminDashboard/>}/>
        </Routes>
    )
}

export default AdminDashboard;