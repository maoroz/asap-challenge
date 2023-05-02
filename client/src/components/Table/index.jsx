import React from "react";
import { columns } from "../../utils/contants";
import Table from "react-bootstrap/Table";

const FilesTable = ({ data }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {columns.map((c) => (
            <th>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((fileData) => (
          fileData.lines.map((d => (
            <tr>
              <td>{fileData.file}</td>
              <td>{d.text}</td>
              <td>{d.number}</td>
              <td>{d.hex}</td>
            </tr>
          )))
        ))}
      </tbody>
    </Table>
  );
};

export default FilesTable;
