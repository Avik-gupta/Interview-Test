import React, { useState } from "react";
import { Avatar, Button, Badge } from "@mui/material";
import Sort from "./Sort";

const Card1 = ({ userData, handleRemove }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(criteria);
      setSortOrder("asc");
    }
  };

  const compareFunction = (a, b) => {
    const valueA = a.twubric[sortBy];
    const valueB = b.twubric[sortBy];

    if (valueA < valueB) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (valueA > valueB) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  };

  const sortedUserData = sortBy
    ? userData.slice().sort(compareFunction)
    : userData;

  return (
    <div>
      <Sort handleSort={handleSort} />
      <div className="flex flex-wrap justify-center">
        {sortedUserData?.map((data, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar alt={data.username} src={data.image} />
                  <div>
                    <h2 className="text-lg font-semibold">{data.fullname}</h2>
                    <p className="text-sm text-gray-600">@{data.username}</p>
                  </div>
                </div>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => handleRemove(data)}
                >
                  Remove
                </Button>
              </div>
              <div className="mt-4">
                <h3 className="text-md font-semibold text-gray-700">
                  Twubric Scores
                </h3>
                <div className="mt-2">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <Badge className="bg-gray-300 px-2 py-1 rounded-md text-sm font-medium text-gray-700">
                      {data.twubric.total}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Friends</span>
                    <Badge variant="secondary">{data.twubric.friends}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Influence</span>
                    <Badge variant="secondary">{data.twubric.influence}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Chirpiness</span>
                    <Badge variant="secondary">{data.twubric.chirpiness}</Badge>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-md font-semibold text-gray-700">Joined</h3>
                <p className="text-sm text-gray-600">{data.join_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1;
