import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import DataTable, { createTheme } from "react-data-table-component";
import { Link } from "react-router-dom";
import WorkList from "../components/WorkList";

function Main() {
  const [noticeList, setNoticeList] = useState([]);
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        backgrounColor: "red",
      },
    },
  };

  const conditionalRowStyles = [
    {
      when: () => true,
      style: {
        backgroundColor: "white",
        color: "black",
        "&:hover": {
          backgrounColor: "#bafff9",
          //TODO how change color when hover?
        },
      },
    },
  ];

  const columns = [
    {
      name: "번호",
      selector: (row) => row.scheduleIdx, // error cause,when input string value
      sortable: true,
      width: "80px",
      center: true,
    },
    {
      name: "제목",
      selector: (row) => row.scheduleName,
      // sortable: true,
      cell: (row) => (
        <Link to={`detail/${row.scheduleIdx}`} state={{ value: row }}>
          {row.scheduleName}
        </Link>
      ),
      center: true,
    },
    {
      name: "수정일",
      selector: (row) => row.modifiedDt,
      // sortable: true,
      cell: (row) => <div>{row.modifiedDt.split("T")[0]}</div>,
      center: true,
    },
  ];

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get(
          "http://g9soft.iptime.org:19090/nft/admin/api/v1/schedule_list"
        );
        if (res.data.code === "0000") {
          // console.log(res);
          setNoticeList(res.data.result);
        }
      } catch (e) {
        alert("error");
      }
    };
    getList();
  }, []);

  const handleChange = (state) => {
    console.log("Selected Rows: ", state.selectedRows);
  };

  return (
    <TableBox>
      {/* <DataTable
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
        columns={columns}
        data={noticeList}
        selectableRows // add for checkbox selection
        onSelectedRowsChange={handleChange}
        pagination={true}
        paginationPerPage={3}
        paginationRowsPerPageOptions={[3, 10, 20]}
      /> */}
      <WorkList />
    </TableBox>
  );
}

const TableBox = styled.div`
  width: 800px;
  margin: 0 auto;
`;

export default Main;
