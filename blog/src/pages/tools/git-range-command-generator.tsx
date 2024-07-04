/*
---
title: git commit date range command generator
slug: generates commands for finding git commits in a date range.
tags:
  - tools
  - git
date: "5-11-2024"
---
*/

import { useState } from "react";
import { PostWrapper } from "../../components/PostWrapper";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export const Page = () => {
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  return (
    <PostWrapper>
      <DateRangePicker
        ranges={[state]}
        onChange={(item) =>
          setState({
            ...state,
            ...item.selection,
          })
        }
      />
    </PostWrapper>
  );
};

export default Page;
