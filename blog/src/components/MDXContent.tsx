"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { useMDXComponents } from "../mdx-components";

interface MDXContentProps {
  source: MDXRemoteProps;
}

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={useMDXComponents()} />;
}
