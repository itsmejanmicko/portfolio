
import TerminalNav from './TerminalNav'
import ExperienceProps from '../../reducers/Experience'

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex bg-gray-900 text-gray-100" id='experience'>
    <TerminalNav />
    <div className="max-w-4xl mx-auto px-4 py-20 mb-10 ">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Experience</h1>
      <div className="space-y-8">
      <ExperienceProps 
      title="Technical Engineer" 
      year="2023" 
      company="Internship" 
      description="I have been trained in technical support, specializing in hardware and office tools commonly used in corporate environments. My experience includes maintaining systems and continuously developing new skills in machine operations and troubleshooting." />
      <ExperienceProps 
      title="Network Engineer" 
      year="2023" 
      company="Internship" 
      description="I have undergone training with Cisco and Linksys technologies, including routers, switches, access points, and server room infrastructure, equipping me with hands-on expertise in network setup and management. Note that this training is under the company provision no certificate given after the training, mostly used for company needs." />
        
      </div>
    </div>
  </div>
  )
}
