import Work from "@/components/Home/Work";
import { getAllProjects } from "@/lib/client";
import React, { Suspense } from "react";

async function PortfolioPage() {
  const works = (await getAllProjects()) || [];
  return (
    <div className="app__padding">
      <Suspense fallback="loding...">
        <Work works={works} />
      </Suspense>
    </div>
  );
}

export default PortfolioPage;
