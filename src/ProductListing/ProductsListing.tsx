import React from 'react';
import { useTable } from 'react-table';

const ProductsListing = () => {
  // Define the table data
  const data = React.useMemo(
    () => [
      {
        productName: 'Product A',
        category: 'Electronics',
        price: '$99.99',
      },
      {
        productName: 'Product B',
        category: 'Clothing',
        price: '$49.99',
      },
      {
        productName: 'Product C',
        category: 'Home Decor',
        price: '$29.99',
      },
      {
        productName: 'Product D',
        category: 'Beauty',
        price: '$15.99',
      },
      {
        productName: 'Product E',
        category: 'Sports',
        price: '$79.99',
      },
    ],
    []
  );

  // Define the table columns
  const columns:any = React.useMemo(
    () => [
      {
        Header: 'Product Name',
        accessor: 'productName',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Price (USD)',
        accessor: 'price',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="table-header-row">
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="table-body">
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="table-row">
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductsListing;
