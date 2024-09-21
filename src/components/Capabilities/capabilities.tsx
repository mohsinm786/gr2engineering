import React from 'react'
import Table from '../Table/table'
import tableData from '@/app/engineering/tableData'
import tableData2 from '@/app/engineering/tableData2'
import BulletPoints from '../BulletPoints/bulletPoints'

function Capabilities() {
    return (
        <>
            <h2 className={`mb-4 font-bold !leading-tight text-green-900 dark:text-white `}>
                EPCM
            </h2>
            <Table columnName={tableData.columnName} tableDataCol1={tableData.tableDataCol1} tableDataCol2={tableData.tableDataCol2} tableDataCol3={tableData.tableDataCol3} />

            <div className='mt-10 flex flex-wrap justify-center  gap-10'>
                <BulletPoints columnName={tableData2.columnName[0]} tableDataCol={tableData2.tableDataCol1} />
                <BulletPoints columnName={tableData2.columnName[1]} tableDataCol={tableData2.tableDataCol2} />
                <BulletPoints columnName={tableData2.columnName[2]} tableDataCol={tableData2.tableDataCol3} />
                <BulletPoints columnName={tableData2.columnName[3]} tableDataCol={tableData2.tableDataCol4} />
                <BulletPoints columnName={tableData2.columnName[4]} tableDataCol={tableData2.tableDataCol5} />
                <BulletPoints columnName={tableData2.columnName[5]} tableDataCol={tableData2.tableDataCol6} />
                <BulletPoints columnName={tableData2.columnName[6]} tableDataCol={tableData2.tableDataCol7} />
                <BulletPoints columnName={tableData2.columnName[7]} tableDataCol={tableData2.tableDataCol8} />
            </div>
        </>
    )
}

export default Capabilities