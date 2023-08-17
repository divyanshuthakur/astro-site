import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, description, ogImage, duration } = frontmatter;

 return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 mx-auto">
            <a href={href} className="block w-full  hover:opacity-60 transition duration-200">
              <img className="w-full max-w-[100%] h-auto" src={ogImage}></img>
              <div className="py-4 px-2 flex-col justify-between">
                <div className="text-2xl text-gray-700">{title}</div>
                <div className="text-lg py-2 text-gray-500">{duration}</div>
              </div>
            </a>
    </div>
 )

//  return (
//   <section className="mx-auto px-0 py-4 sm:py-6">
//       <div className="flex flex-col sm:flex-row sm:space-x-4 mx-auto">
//           <a href={href}>
//             <img className="rounded-2xl hover:border shrink-0 grow-0 basis-1/3 sm:max-w-[420px]" src={ogImage}></img>
//           </a>
//           <div className="py-5 sm:py-0 sm:pl-3 flex-col justify-between">
//             <div>
//               <div className="text-2xl font-medium text-gray-700">{title}</div>
//               <p className="py-2 text-gray-500">{duration}</p>
//               <div className="text-lg  pt-0 py-3 sm:py-5 sm:mb-10 text-gray-700">{description}</div>
//             </div>
//             <a href={href}><button className="mb-0 text-indigo-600 text-lg hover:underline hover:text-indigo-800 decoration-2 underline-offset-4">Read Case Study</button></a>
//           </div>
//       </div>
//   </section>
// )

}


