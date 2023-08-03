import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  console.log("Card2.tsx", frontmatter);
  const { title, description, ogImage, duration } = frontmatter;

 return (
    <section className="mx-auto px-0 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row sm:space-x-4 mx-auto">
            <a href={href}>
              <img className=" transition ease-in-out hover:translate-y-[-4px] shrink-0 grow-0 basis-1/3 sm:max-w-[420px]" src={ogImage}></img>
            </a>
            <div className="py-5 sm:py-9 sm:pl-3">
                <a href={href}><div className="text-3xl font-medium font-serif">{title}</div></a>
                <p className="py-2 text-slate-400">{duration}</p>
                <div className="text-lg py-5">{description}</div>
            </div>
        </div>
    </section>
 )


}

/*
  return (
    <li className="my-6">
      <div data-id="card-container" className="card flex flex-col lg:flex-row gap-x-4">

          <div className="shrink-0 grow-0 basis-1/3">
            <img className="" src={ogImage}></img>
          </div>

        <div className="basis-2/3">
          <a href={href} className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0">
            
              <h3 className="text-lg font-medium hover:underline">
                {title}
              </h3>
 
          </a>
          <p>{description}</p>
        </div>
      </div>
    </li>

  )
*/


/*
  return (
        <li>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="rounded-md" src={ogImage}></img>
                    </div>
                    <div className="p-8">
                        <a href={href}>
                        <h2>{title}</h2>
                        </a>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </li>
    )

*/


