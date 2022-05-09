import React from 'react'
import "./categories.scss"

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Output } from '@mui/icons-material';




interface Column {
    id: "id" |"order" | "name" | "parent" | "gparent" | "published" | "btn1" ;
    label: any;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }


const columns: readonly Column[] =  [
  { id: "id", label: "ID", minWidth: 30 },
  { id: "order", label: "Display Order", minWidth: 100 },
  {
    id: "name",
    label: "Name",
    minWidth: 170
  },
  {
    id: "parent",
    label: "Parent",
    minWidth: 170
  },
  {
    id: "gparent",
    label: "Grand Parent",
    minWidth: 100
  },
  {
    id: "published",
    label: "Published",
    minWidth: 70
  },
  {
    id: "btn1",
    // minWidth: 20,
    label:undefined
  },
//   {
//     id: "btn2",
//     minWidth: 20,
//     label:undefined

//   },
];

interface Data {
    id: number;
    order: number;
    name:string
    parent: string;
    gparent: string;
    published: string;
    btn1:any,
    // btn2:any,

  }
  
  function createData(
    id: number,
    order: number,
    name:string,
    parent: string,
    gparent: string,
    published: string,
    btn1:any,
    // btn2:any,
  ): Data {
    return { id, order, name, parent, gparent,published,btn1};
  }

const Btn1 = () => {
  return(
   <div className="table__btns">
        <button className='table__btn1' >SIL</button>
    <button className='table__btn2'>EDIT</button>
   </div>
   
  )
};

// const Btn2 = () => {
//   return(
    
   
//   )
// };

const rows = [
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),
  createData(0, 1, "Alle Produkte", "sfs", "sdfs", "YEs", <Btn1/>),

];


// const arr = [1,2,3,4,5,6,7,8,9,10]

// function reverse(array:number[]){
//     var output:[] = [];
//     for (var i = 0; i<= array.length; i++){
//         output.push(array.pop());
//     }

//     return output;
// }

// console.log("Reversed array",reverse(output));





const Categories = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  return (
    <div className="categories__container">
        <div className="data">
        <div className="cat__title">Category Management (366)</div>
        <div className="cat__data">
            <div className="upper">
                <div className="form__input">
                    <div className="left">
                        <div className="input1">
                        <label htmlFor="input1">Id</label>
                        <input type="text" id='input1' className="left__input" />
                        </div>
                        <div className="input1">
                        <label htmlFor="input1">Name</label>
                        <input type="text" id='input1' className="left__input" />
                        </div>
                    </div>
                    <div className="right">
                    <div className="input1">
                        <label htmlFor="input1">Is Published?</label>
                        <input type="text" id='input1' className="left__input" />
                        </div>
                        <div className="input1">
                        <label htmlFor="input1">Parent Category</label>
                        <input type="text" id='input1' className="left__input" />
                        </div>
                        <div className="input1">
                        <label htmlFor="input1">Page Size</label>
                        <input type="text" id='input1' className="left__input" />
                        </div>
                    </div>


                </div>
                <hr className="btn__upper" />
                    <div className="btn">
                            <button className="btn1">Search</button>
                            <button className="btn1 btn2">Excel Export</button>
                            </div>
                
            </div>
            <div className="addNew">+  ADD NEW</div>
            <div className="table">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Categories