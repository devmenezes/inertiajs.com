import React from 'react'
import { Code, H1, Layout, P } from '@/Components'

const meta = {
  title: 'inertia-progress@v0.2.4',
}

const Page = () => {
  return (
    <>
      <H1>inertia-progress@v0.2.4</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on December 24, 2020</div>
      <P>
        Add peer dependency support for <Code>@inertiajs/inertia</Code> version <Code>0.8.0</Code>.
      </P>
    </>
  )
}

Page.layout = page => <Layout children={page} meta={meta} />

export default Page