import React from 'react'
import TotalUserPieChart from '../PieChart/Pie';
import TotalUserBarChart from '../BarChart/BarChart';
import Table from '../Table/table';
import tableData6 from '@/app/engineering/tableData6';

function ResourcesDesciplines() {
    const resources = ["Multi-discipline Engineering, and Advisory services", "Facilities Improvement, HSE", "EPCM, Fabrication Management, Project Controls", "LNG and Gas Processing, Chemicals, Refining", "ESG, CCUS, Methane Abatement, Hydrogen ", "Project Development, and Definition"]
    const resources2 = ["Project Management", "Process", "Mechanical", "Piping", "Civil and Structural", "Electrical and Instruments", "Others, and SME advisory team"]

    const label1 = ["pms, 28", "Process, 9", "Piping, 14", "Mech, 11", "E&I, 7", "CSA, 13 ", "SME, 8"];
    const data1 = [28, 9, 14, 11, 7, 13, 8];
    const backgroundColor1 = [
        'rgba(41, 128, 185)',
        'rgba(231, 76, 60)',
        'rgba(204, 209, 209)',
        'rgba(244, 208, 63)',
        'rgba(31, 97, 141)',
        'rgba(46, 204, 113)',
        'rgba(142, 68, 173)',
    ];

    const labels2 = ["PM, 27", "Process, 36", "Piping, 104", "Mech, 27", "E&I, 64", "C&S, 36 ", "Other, 158"];
    const data2 = [27, 36, 104, 27, 64, 36, 158];
    const backgroundColor2 = [
        'rgba(41, 128, 185)',
        'rgba(231, 76, 60)',
        'rgba(204, 209, 209)',
        'rgba(244, 208, 63)',
        'rgba(31, 97, 141)',
        'rgba(46, 204, 113)',
        'rgba(142, 68, 173)',
    ];
    return (
        <>
            <div className='flex flex-wrap justify-center items-center gap-10'>
                <div>
                    <h2 className={` mb-4   font-bold !leading-tight text-green-900 dark:text-white mt-10`}>
                        Engineering and advisory resources

                    </h2>
                    <h2 className={`mb-4 font-bold !leading-tight text-blue-400 dark:text-white text-lg`}>
                        Capabilities and disciplines

                    </h2>
                    <h2 className={`mb-4 font-bold !leading-tight  dark:text-white text-lg underline`}>
                        Resources

                    </h2>
                    {resources.map((resource) => (
                        <li className='mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg'>{resource}</li>
                    ))}

                </div>
                <div>

                    <h2 className={`mb-4 font-bold text-green-900 !leading-tight  dark:text-white `}>
                        Core Team by Numbers, Houston
                    </h2>

                    <TotalUserPieChart label={label1} data={data1} backgroundColor={backgroundColor1} />

                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-10 mt-10'>
                <div>
                    <h2 className={` mb-4   font-bold !leading-tight text-green-900 dark:text-white mt-10`}>
                        Capabilities - Engineering
                    </h2>
                    <h2 className={`mb-4 font-bold !leading-tight text-blue-400 dark:text-white text-lg`}>
                        Resources Discipline breakdown
                    </h2>
                    <h2 className={`mb-4 font-bold !leading-tight  dark:text-white text-lg underline`}>
                        Multi-discipline Engineering Resources
                    </h2>
                    {resources2.map((resource) => (
                        <li className='mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg'>{resource}</li>
                    ))}
                </div>
                <div style={{width:"80%" , height:"400px"}}>
                    <h2 className={`mb-4 font-bold text-green-900 !leading-tight  dark:text-white `}>
                        Global Team by Numbers
                    </h2>
                    <TotalUserBarChart labels={labels2} data={data2} label="Global Team by Numbers" backgroundColor={backgroundColor2} />

                </div>
                <div className='mt-10'>
                    <Table isBold={true} columnName={tableData6.columnName} tableDataCol1={tableData6.tableDataCol1} tableDataCol2={tableData6.tableDataCol2} tableDataCol3={tableData6.tableDataCol3} />

                </div>
            </div>

        </>
    )
}

export default ResourcesDesciplines;