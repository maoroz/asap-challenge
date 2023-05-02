import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Header from "../../components/Header";
import Table from "../../components/Table";
import SearchInput from "../../components/SearchInput";

function Home() {
  const [filesData, setFilesData] = useState({});
  const [filterName, setFilterName] = useState("");
  const [loading, setIsLoading] = useState(false);

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

  const handleOnChange = (event) => {
    event.stopPropagation();
    const fileName = event.target.value;
    setFilterName(fileName);
  };

  const handleOnSearch = () => {
    setIsLoading(true);
    fetch(
      "/api/files/data?" +
        new URLSearchParams({
          fileName: filterName,
        }),
      {
        headers: {
          accepts: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setFilesData(data))
      .then(() => setIsLoading(false))
      .catch((a) => {
        console.log(a);
      });
  };

  if (
    loading ||
    (Object.keys(filesData).length === 0 && filesData.constructor === Object)
  ) {
    return (
      <div class="h-100 d-flex align-items-center justify-content-center">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <SearchInput
        buttonLabel={"Search"}
        label={"Search by File Name"}
        onSearch={handleOnSearch}
        value={filterName}
        onChange={handleOnChange}
      />
      <Table data={filesData.files} />
    </div>
  );
}

export default Home;
