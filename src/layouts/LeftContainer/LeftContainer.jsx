
import { useState } from "react"
import ShadowList from "../ShadowList/ShadowList"
import BoxPanel from "../BoxPanel/BoxPanel"

function LeftContainer() {

  const [tabs, setTabs] = useState(0)

  const tabsList = [
    { name: "Shadow", component: <ShadowList /> },
    { name: "BoxPanel", component: <BoxPanel /> }
  ]

  return (
    <>

      <div className="relative mt-20 w-[600px] h-[550px] border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50 ">



        <div className="flex absolute -translate-y-full -left-[1px]">

          {tabsList.map((tab, index) => (
            <button
              className="min-w[125px] py-2 px-3 mr-4 font-bold border-t border-x border-gray-300 bg-slate-50 hover:bg-slate-200 text-slate-700 rounded-t focus:outline-none focus:ring-2 ring-inset focus:ring-blue-300"
              onClick={() => setTabs(index)}
              key={index}>
              {tab.name}
            </button>
          ))}
        </div>
        <div className="">

          {tabsList[tabs].component}
        </div>





      </div>


    </>
  )
}
export default LeftContainer