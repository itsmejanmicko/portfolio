
import TerminalNav from './TerminalNav'
import ExperienceProps from '../../reducers/Experience'
interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  tags: string[]
}
const projects: Project[] = [
  {
    id: 1,
    title: "Access Point Deployment",
    description: "Designed and implemented a network using LAPAX access points, optimizing wireless connectivity for high-density environments. Configured advanced features like VLAN segmentation, seamless roaming, and security protocols to ensure reliable and secure Wi-Fi performance.",
    imageUrl: "../../../public/jmKGsL5s.jpg",
    tags: ["Cisco","Wi-Fi","Network" ]
  },
  {
    id: 2,
    title: "Switch Configuration",
    description: "Configured and deployed Cisco and Linksys switches to build scalable and efficient network infrastructures. Implemented VLANs, trunking, and port security to optimize traffic management and enhance network security. Performed troubleshooting and ensured seamless integration with existing network devices.",
    imageUrl: "../../../public/OZBthtS5.jpg",
    tags: ["Cisco", "Linksys", "Switches" ]
  },
  {
    id: 3,
    title: "Wireless Network Optimization",
    description: "Successfully integrated Cisco access points with network switches to provide robust and scalable wireless connectivity. Configured PoE (Power over Ethernet) ports on switches, ensured proper VLAN assignment, and optimized wireless settings for seamless connectivity and performance. Conducted testing and troubleshooting to guarantee reliability across the network.",
    imageUrl: "../../../public/QGJc_426.jpg",
    tags: ["Cisco","Switch", "Connectivity" ]
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex bg-gray-900 text-gray-100" id="experience">
      <TerminalNav />
      <div className="max-w-4xl mx-auto px-4 py-20 mb-10">
        <h1 className="text-4xl font-bold text-blue-400 mb-8">Experience</h1>
        <div className="space-y-8">
          <ExperienceProps
            title="Technical Engineer"
            year="2023"
            company="Internship"
            description="I have been trained in technical support, specializing in hardware and office tools commonly used in corporate environments. My experience includes maintaining systems and continuously developing new skills in machine operations and troubleshooting."
          />
          <ExperienceProps
            title="Network Engineer"
            year="2023"
            company="Internship"
            description="I have undergone training with Cisco and Linksys technologies, including routers, switches, access points, and server room infrastructure, equipping me with hands-on expertise in network setup and management. Note that this training is under the company provision no certificate given after the training, mostly used for company needs."
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-12 mt-12">Work Highlights</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div key={project.id} className=" bg-gray-900 text-gray-100 rounded-lg shadow-md overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className=" dark:text-white mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

