import React from "react";
import "../styles/Table.css";
import Body from "./Body";

function Table({ headings, users, handleSort }) {
    return (
        <div className="datatable mt-5">
            <table
              id="table"
              className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {headings.map(({ name, width }) => {
                            return (
                                <th
                                  className="col"
                                  style={{ width }}
                                  key={name}
                                  onClick={() => {
                                      handleSort(name.toLowerCase());
                                  }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <Body users={users}/>
            </table>
        </div>
    );
}



export default Table;