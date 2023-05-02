import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Header from "../../components/Header";
import Table from "../../components/Table";

function Home() {
  const [filesData, setFilesData] = useState({});

  useEffect(() => {
    fetch("/api/files/data", {
      headers: {
        accepts: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setFilesData(data))
      .catch((a) => {
        console.log(a);
      });
  }, []);

  if (Object.keys(filesData).length === 0 && filesData.constructor === Object) {
    return <div class="h-100 d-flex align-items-center justify-content-center"><Spinner animation="border" /></div>;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Table data={filesData.files}/>
    </div>
  );
}

export default Home;
