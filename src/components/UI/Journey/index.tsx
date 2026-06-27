import React from 'react'

const Journey = () => {
    const Experience = [
        {
            "Id" : 1,
            "CompanyName" : "SuretechInfoSoft.Pvt.Ltd",
            "Post" : "Intern"
        },
        {
            "Id" : 2,
            "CompanyName" : "SuretechInfoSoft.Pvt.Ltd",
            "Post" : "Softwere Engineer"
        },        
    ]

  return (
    <div className="w-full bg-[#ccd5ae] relative py-20">
  {/* Journey Line */}
  <div className="absolute left-1/11 top-0 bottom-0 -translate-x-1/2">
    <div className="h-full border-l-4 border-dashed border-stone-500" />
  </div>

  <div className="flex flex-col gap-64">
    {Experience.map((company, index) => (
      <div
        key={company.Id}
        className={"relative flex mx-8 md:mx-32 justify-start"}
      >
        {/* Journey Stop */}
        <div className="absolute left-0 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-600 ml-[10px]" />

        <div className="bg-white rounded-md h-72 w-72 mx-8 md:mx-16">
          {company.CompanyName}
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Journey