import React from 'react'
// import { Link } from 'react-router-dom'
// import FileViewer from 'react-file-viewer'
const TableItem = ({dossierData}) => {
  return(<>
    
          <tr  className="bg-green-200 border-b text-green-800 dark:text-white border-green-700 dark:bg-purple-800 dark:border-purple-300">
            <td  className="px-[1.5vw] py-[2.2vh] font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {dossierData.doctor_name}
            </td>
            <td className="px-[1.5vw] py-[2.2vh]">
              {dossierData.docuuid}
            </td>
            <td className="px-[1.5vw] py-[2.2vh]">
              {dossierData.date}
            </td>
            <td className="px-[1.5vw] py-[2.2vh]">
              {dossierData.venue}
            </td>
            <td className="px-[1.5vw] py-[2.2vh]">
              {dossierData.specialization}
            </td>
            <td className="px-[1.5vw] py-[2.2vh] text-left">
              {dossierData.prescription && <a href={dossierData.prescription} target='blank' className="font-medium px-1 text-green-600 dark:text-black hover:underline">Prescription</a>}
              {dossierData.report && <a href={dossierData.report} target='blank' className="font-medium px-1 text-green-600 dark:text-black hover:underline">Report</a>}
              {dossierData.scan && <a href={dossierData.scan} target='blank' className="font-medium px-1 text-green-600 dark:text-black hover:underline">Scan</a>}
            </td>
            <td className="px-[1.5vw] py-[2.2vh] text-left">
              {/* <button onClick={handleclick} className="font-medium text-green-600 dark:text-black hover:underline">View</button> */}
              {/* <button onClick={()=>{updateDossier(dossierData)}} className="font-medium text-green-600 dark:text-black hover:underline">Edit</button> */}
            </td>
            <td>
              <div className="flex items-center">
                <button data-dismiss-target="#sticky-banner" type="button" className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-purple-900 dark:hover:text-white">
                  <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Close banner</span>
                </button>
              </div>
            </td>
          </tr>
    </>
  )
}

export default TableItem
