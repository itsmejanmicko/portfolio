export default function Docs() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Docs</h1>
          
          <p className="text-slate-600 mb-12 leading-relaxed">
          This portfolio is inspired by the functionality of Node.js, particularly its process of starting and running a server. For those with experience in Node.js, the terminal section provides an opportunity to explore and interact with this concept.
          </p>
  
          <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">How to navigate pages.</h2>
          
          <p className="text-slate-600 mb-4">
          To navigate to the "Project," "AboutMe," and "Tech" sections, click the terminal icon in the footer. Change the directory by typing `cd Projects`, `cd About`, or `cd Tech` as needed. To start the respective section, use the command `npm start` or `npm run start`.
          </p>
  
          <div className="bg-slate-50 rounded-lg p-4 my-6 font-mono text-sm">
                <div>
                    <p>C:\Users\Portfolio</p>
                    <code className="text-purple-600">cd</code>{' '}
                    <code className="text-purple-600">Project</code>{' '}
                    <code></code>
                </div>
                <div className="">
                    <p>C:\Users\Portfolio\Project</p>
                    <code className="text-purple-600">cd</code>{' '}
                    <code className="text-purple-600">Project</code>{' '}
                    <code>npm run start</code>
                </div>
                </div>

                
          <p className="text-slate-600 mb-4">
            You should see the page after you click the run start. If you want to go back to the previous page, type `cd..` and press Enter. If there's no response, make sure you type correctly the directory otherwise its not changing the directory.
          </p>
          <p className="text-slate-600 mb-4">
            If you want to exit the terminal, type `exit` and press Enter. This will take you back to the home page.
          </p>
           
          <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">Note:</h2>
          <ul className="space-y-4 text-slate-600 list-disc pl-6 mt-4">
            <li>
                This portfolio is a work on progress. It's a mimic of a terminal interface, and the commands are not functional.
            </li>
             <li>
                The terminal is designed to provide a unique and interactive experience for users like a backend developer who used terminal for daily basis.
             </li>
             <li>
                I add the ui of MacOS to make it more user friendly and easy to use. Perhaps, I can afford one so I make it on my own.
             </li>
          </ul>
        </article>
      </div>
    )
  }
  
  