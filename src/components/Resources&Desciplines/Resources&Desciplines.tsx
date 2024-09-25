import React from 'react'
import TotalUserPieChart from '../PieChart/Pie';

function ResourcesDesciplines() {
    const resources = ["Multi-discipline Engineering, and Advisory services", "Facilities Improvement, HSE", "EPCM, Fabrication Management, Project Controls", "LNG and Gas Processing, Chemicals, Refining", "ESG, CCUS, Methane Abatement, Hydrogen ", "Project Development, and Definition"]


    return (
        <div className='flex justify-center items-center gap-10'>
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

                <TotalUserPieChart />

            </div>
        </div>
    )
}

export default ResourcesDesciplines;