import React, { useState, useMemo } from "react";

// Styles
import { TableContainer, TableBody, TableHeader, Container } from "./styles";

const Table = ({ rows }) => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedItems = useMemo(() => {
    if (!rows) {
      return [];
    }

    let sortedPlayers = [...rows];

    if (sortConfig !== null) {
      sortedPlayers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }

        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }

        return 0;
      });
    }

    return sortedPlayers;
  }, [sortConfig, rows]);

  const requestSort = (key) => {
    let direction = "ascending";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }

    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <Container>
      <TableContainer>
        <TableHeader>
          <tr>
            <th>
              <button
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Player
              </button>
            </th>
            <th>
              <button
                onClick={() => requestSort("score")}
                className={getClassNamesFor("score")}
              >
                Score
              </button>
            </th>
            <th>
              <button
                onClick={() => requestSort("time")}
                className={getClassNamesFor("time")}
              >
                Time
              </button>
            </th>
          </tr>
        </TableHeader>
        <TableBody>
          {sortedItems.map((player, index) => (
            <tr key={index + 1}>
              <td>{player.name}</td>
              <td>{player.score}</td>
              <td>{player.time}</td>
            </tr>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
};

export default Table;
