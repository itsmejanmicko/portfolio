

export default function EducationProps({major, year, university, description}:{major:string, year:string, university:string, description:string}) {
  return (
          <div className="border-l-2 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold">{major}</h3>
            <p className="text-blue-400">{year}</p>
            <p className="text-gray-400 mt-2">
              {university}
              <br />
                {description}
            </p>
          </div>
  )
}
