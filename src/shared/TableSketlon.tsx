import React from 'react'

const TableSketlon = () => {
    return (
        <div className='my-8'>
            <table className={"w-full"}>
                <thead className={"text-[13px] uppercase"}>
                    <tr>
                        <th scope="col" className='px-6 py-4'>
                            <p className='bg-borderGray h-[30px] px-6 animate-pulse rounded-xl'></p>
                        </th>
                        <th scope="col" className='px-6 py-4'>
                            <p className='bg-borderGray h-[30px] px-6 animate-pulse rounded-xl'></p>
                        </th>
                        <th scope="col" className='px-6 py-4'>
                            <p className='bg-borderGray h-[30px] px-6 animate-pulse rounded-xl'></p>
                        </th>
                        <th scope="col" className='px-6 py-4'>
                            <p className='bg-borderGray h-[30px] px-6 animate-pulse rounded-xl'></p>
                        </th>
                        <th scope="col" className='px-6 py-4'>
                            <p className='bg-borderGray h-[30px] px-6 animate-pulse rounded-xl'></p>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <>
                        {Array.from({ length: 20 }, (_, index) => (
                            <tr key={index}>
                                <td className=' px-6 py-4 text-sm font-medium text-center'>
                                    <p className="bg-borderGray h-[30px] px-6  animate-pulse rounded-xl"></p>
                                </td>
                                <td className=' px-6 py-4 text-sm font-medium text-center'>
                                    <p className="bg-borderGray h-[30px] px-6  animate-pulse rounded-xl"></p>
                                </td>
                                <td className=' px-6 py-4 text-sm font-medium text-center'>
                                    <p className="bg-borderGray h-[30px] px-6  animate-pulse rounded-xl"></p>
                                </td>

                                <td className=' px-6 py-4 text-sm font-medium text-center'>
                                    <p className="bg-borderGray h-[30px] px-6  animate-pulse rounded-xl"></p>
                                </td>
                                <td className=' px-6 py-4 text-sm font-medium text-center'>
                                    <p className="bg-borderGray h-[30px] px-6  animate-pulse rounded-xl"></p>
                                </td>
                            </tr>
                        ))}
                    </>
                </tbody>
            </table>
        </div>
    )
}

export default TableSketlon