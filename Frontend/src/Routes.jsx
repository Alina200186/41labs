import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";


const ComfortConnect = React.lazy(() => import("pages/ComfortConnect"));
const User =React.lazy(() => import("pages/User"));
const ProjectRoutes = () => {
  return (
    
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ComfortConnect />} />
        <Route path="/User" element={<User />} />
        
      </Routes>
    </Suspense>
  );
};

export default ProjectRoutes;
