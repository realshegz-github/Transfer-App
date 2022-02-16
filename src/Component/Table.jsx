import React from "react";
import MaterialTable from 'material-table';

 export const Table =() =>{
    const data = [
             {id: 1},
            {name: "Abiodun segun"},
            {detail: "quick transfer"},
            {amount: 1000},
            {date: new Date().getFullYear()  }
    ]

    const columns =[         
            {title: 'Date', field:'date'},
            {title: 'Name', field:'name'},
            {title: 'Detail', field:'detail'},
            {title: 'Amount', field:'number'}
        ]
    return(
        <div>
            <MaterialTable
            title="Transactions"
            data={data}
            columns={columns}
            options={{paging: false,
                exportButton: true}}
            
            />
        </div>
    )
};
export default Table;