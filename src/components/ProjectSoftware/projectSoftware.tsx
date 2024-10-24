import React from 'react';
import SoftwareCard from '@/components/engineeringcards/SoftwareCard'; // Adjust the import based on your project structure
import tableData7 from '@/app/engineering/tableData7';
import tableData8 from '@/app/engineering/tableData8';

function ProjectSoftware() {
    return (
        <div className='mt-10'>
            <h2 className={`mb-4 font-bold !leading-tight text-green-900 dark:text-white mt-10 uppercase text-[23px]`}>
                Project Management Software
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                <SoftwareCard
                    title={tableData7.columnName[0]}
                    tools={tableData7.tableDataCol2}
                />
                <SoftwareCard
                    title={tableData8.columnName[0]}
                    tools={tableData8.tableDataCol2}
                />
            </div>
        </div>
    );
}

export default ProjectSoftware;
