"use client";

import { Product } from "@prisma/client";
import { DataGrid } from "@mui/x-data-grid";

interface ManageProductsClientProps {
  products: Product[];
}

const ManageProductsClient = ({ products }: ManageProductsClientProps) => {
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ManageProductsClient;
