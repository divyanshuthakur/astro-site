import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  console.log("Card.tsx", frontmatter);
  const { title, description, ogImage } = frontmatter;

  return (
    <li className="my-6">
      <div data-id="card-container" className="flex flex-row gap-x-4">
        {ogImage ? (
          <div data-id="card-left" className="shrink-0 grow-0 basis-1/3">
            <img className="rounded-md" src={ogImage}></img>
          </div>
        ) : null}
        <div data-id="card-right" className="basis-2/3">
          <a
            href={href}
            className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
          >
            {secHeading ? (
              <h2 className="text-lg font-medium decoration-dashed hover:underline">
                {title}
              </h2>
            ) : (
              <h3 className="text-lg font-medium decoration-dashed hover:underline">
                {title}
              </h3>
            )}
          </a>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}
