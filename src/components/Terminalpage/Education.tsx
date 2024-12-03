import EducationProps from '../../reducers/Education'
import TerminalNav from './TerminalNav'

export default function Education() {
  return (
    <main id='education' className="flex flex-col md:flex-row bg-gray-900 text-gray-100 ">
      <section className="flex flex-col md:flex-row w-full p-3  mb-32 sm:mb-12">
        <div className="w-full md:w-1/6">
          <TerminalNav />
        </div>
        {/* <!-- Education --> */}
        <div className="w-full md:w-3/4 mt-12">
      
        <h1 className="text-4xl font-bold text-blue-400 mb-8">Education</h1>
        <div className="space-y-8">
            <EducationProps 
            major="Bachelor in Information Technology" 
            year="2023 - 2025" 
            university=' Polytechnic University of the Philippines' 
            description='Ladderized student Major in Information Technology' />
             <EducationProps 
            major="Diploma in Information Communication Technology" 
            year="2019 - 2023" 
            university=' Polytechnic University of the Philippines' 
            description='Specialized in Web technologies' />
            <EducationProps 
            major="Information Communication Technology" 
            year="2017 - 2019" 
            university=' Eastern Tabayabas College ' 
            description='Introduction to IT industry, taking java and web basic.' />
            <EducationProps 
            major="Junior High School" 
            year="2013 - 2017" 
            university=' Eastern Tabayabas College' 
            description='High School' />
            <EducationProps 
            major="Elementary" 
            year="2007 - 2013" 
            university='Jongo Elementary School' 
            description='Elementary School' />
        </div>
      </div>
      </section>
     
    </main>
  )
}