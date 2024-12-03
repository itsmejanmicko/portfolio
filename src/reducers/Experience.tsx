

export default function ExperienceProps({title, year, company, description}:{title:string, year:string, company:string, description:string}) {
  return (
    <div className="border-l-2 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-blue-400">{year}</p>
          <p className="text-gray-400 mt-2">
           {company}
            <br />
                {description}
          </p>
        </div>
  )
}
