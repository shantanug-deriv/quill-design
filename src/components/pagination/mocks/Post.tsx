//@ts-nocheck
import { Fragment } from 'react'
import { TPaginatedData } from '../pagination.types'

type TData = {
  first_name: string
  last_name: string
  email: string
}

type PostProps = {
  data: TPaginatedData<TData>
}

const Post = ({ data }: PostProps) => (
  <div className="flex flex-col items-start justify-center gap-general-sm border-75 p-general-sm">
    <small className="self-center">{data.id}</small>
    <h3>
      <b>First Name:</b> {data.first_name}
    </h3>
    <h4>
      <b>Last Name:</b> {data.last_name}
    </h4>
    <h4>
      <b>Email ID:</b> {data.email}
    </h4>
  </div>
)

export const configureMockChild = <T,>({
  paginatedData,
}: TPaginatedData<T>) => (
  <Fragment>
    {paginatedData?.map((data) => <Post key={data?.id} data={data} />)}
  </Fragment>
)
