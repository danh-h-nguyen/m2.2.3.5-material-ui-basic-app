import * as React from "react";
import {
  Link,
  // MemoryRouter,
  // Route,
  // Routes,
  useLocation,
} from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

function PaginationLink({ totalJobs, jobsPerPage }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  return (
    <Pagination
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 4,
      }}
      page={page}
      count={totalPages}
      renderItem={(item) => (
        <PaginationItem component={Link} to={`/?page=${item.page}`} {...item} />
      )}
    />
  );
}

export default PaginationLink;

// export default function PaginationLink() {
//   return (
//     <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
//       <Routes>
//         <Route path="*" element={<Content />} />
//       </Routes>
//     </MemoryRouter>
//   );
// }
