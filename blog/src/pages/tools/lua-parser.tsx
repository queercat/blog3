/*
---
title: lua parser [in-progress]
slug: a lua parser written in TypeScript [in-progress]
tags:
  - compilers
  - parsing
  - lua
date: "7-14-2024"
---
*/

import {useEffect, useMemo, useState} from "react";
import {Parser} from "jlua"
import {PostWrapper} from "../../components/PostWrapper";

export const Page = () => {
  const [source, setSource] = useState("")
  const [ast, setAst] = useState("")
  const [errorText, setErrorText] = useState("")
  
  useEffect(() => {
    try {
      setErrorText("")
      const parser = new Parser(source)
      const output = JSON.stringify(parser.parse(), null, 2)
      setAst(output)
    } catch(e) {
      // @ts-ignore
      setErrorText(e.toString())
      setAst("...")
    }
    
  }, [source])

  return (
    <PostWrapper>
      <h1 className={"text-2xl p-4"}>THIS TOOL IS UNDER CONSTRUCTION</h1>
      <div className={"flex flex-col gap-4"}>
        <div className={"flex flex-col gap-4"}>
          <label>source: </label>
          <input className={"bg-slate-100 text-black p-2"} value={source} onChange={(e) => {
            setSource(e.target.value)
          }}/>
        </div>
        
        <pre>{ast}</pre>
        <p>{errorText}</p>
      </div>
    </PostWrapper>
  )
}

export default Page