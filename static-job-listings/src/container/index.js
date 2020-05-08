// Imports
import React, { useEffect, useState } from "react";

// App Imports
import Header from "../components/header";
import jobsData from "../assets/data/data";
import Job from "../components/job";
import "../styles/jobs.scss";
import Filterbar from "../components/filterbar";

const Container = () => {
  // state
  const [jobs, setJobs] = useState({
    data: [],
    filterValues: [],
  });

  // on component load
  useEffect(() => {
    setJobs((state) => {
      return {
        ...state,
        data: jobsData,
      };
    });
  }, []);

  const filteredItems = (itemsToFilter, arr) => {
    let arrList = [];

    if (!arr) {
      arrList = jobs.data;
    } else {
      arrList = arr;
    }

    const filteredItems = arrList.filter((item) => {
      let newItems;
      for (const key in item) {
        if (Array.isArray(item[key])) {
          if (item[key].includes(itemsToFilter)) {
            newItems = item;
          }
        } else {
          if (item[key] === itemsToFilter) {
            newItems = item;
          }
        }
      }
      return newItems;
    });

    return filteredItems;
  };

  const handleClick = (e) => {
    const value = e.target.textContent;
    if (!jobs.filterValues.includes(value)) {
      setJobs((state) => {
        return {
          ...state,
          filterValues: [...state.filterValues, value],
        };
      });
      filteredItems(value);
      setJobs((state) => {
        return {
          ...state,
          data: filteredItems(value),
        };
      });
    }
  };

  const filterData = (filteredValue) => {
    if (filteredValue.length === 0) {
      return jobsData;
    }

    let previousData,
      filteredData = [];
    for (const item of filteredValue) {
      if (filteredValue.length === 1) {
        filteredData = filteredItems(item, jobsData);
        return filteredData;
      } else {
        while (filteredValue.indexOf(item) === 0) {
          previousData = filteredItems(item, jobsData);
          break;
        }
        filteredData = filteredItems(item, previousData);
      }
    }

    return filteredData;
  };

  const clearFiltersValue = () => {
    setJobs((state) => {
      return {
        ...state,
        filterValues: [],
        data: jobsData,
      };
    });
  };

  const removeFilterValue = (fValue) => {
    console.log(fValue);
    const filteredValue = jobs.filterValues.filter((fV) => fV !== fValue);
    setJobs((state) => {
      return {
        ...state,
        filterValues: filteredValue,
        data: filterData(filteredValue),
      };
    });
    //   filterValues: filteredValue,
    //   data: filterData(filteredValue),
  };

  return (
    <>
      <Header />
      {jobs.filterValues.length > 0 && (
        <Filterbar
          filterValues={jobs.filterValues}
          removeFilterValue={removeFilterValue}
          clearFiltersValue={clearFiltersValue}
        />
      )}
      <div className="container">
        {jobs.data.map((job) => (
          <Job key={job.id} job={job} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
};

export default Container;
