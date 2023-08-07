import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, description} = frontmatter;

 return (
    <section className="mx-auto px-0 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row sm:space-x-4 mx-auto">
            <div className="py-5 sm:py-0">
                <div className="text-2xl font-medium text-gray-700">{title}</div>
                <div className="text-lg  pt-0 py-3  text-gray-700">{description}</div>
                <a href={href}><button className="mb-0 text-indigo-600 text-lg hover:underline hover:text-indigo-800">Read Post</button></a>
            </div>
        </div>
    </section>
 )


}

